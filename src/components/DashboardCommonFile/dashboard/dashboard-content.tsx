// @ts-nocheck

"use client"

import { useGetDashboardChartCategoryQuery, useGetDashboardOverviewQuery, useGetDashboardPieQuery, useGetDashboardReveniueQuery } from "@/components/Redux/RTK/dashboardApi"
import { Card, CardContent } from "@/components/ui/card"
import { addDays, format } from "date-fns"
import {
    Calendar,
    CheckCircle,
    DollarSign,
    Factory,
    Package,
    PauseCircle,
    XCircle
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import {
    DateRangePicker
} from "react-date-range"

import "react-date-range/dist/styles.css"; // main style
import "react-date-range/dist/theme/default.css"; // theme css
import AreaChart from "./AreaChart"
import CategoryBar from "./category-bar"
import { DeliveredChart } from "./delivered-chart"
import OrderTypeChart from "./OrderTypesChart"
import RevenueDescriptionTooltip from "./RevenueDescriptionTooltip"
import { SalesChart } from "./sales-chart"
import { StatusPieChart } from "./status-pie-chart"
import { TopCustomers } from "./top-customers"





export default function DashboardContent() {
    const [range, setRange] = useState([
        {
            startDate: addDays(new Date(), -6),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const [from, setFrom] = useState(format(range[0].startDate, "MM-dd-yyyy"));
    const [to, setTo] = useState(format(range[0].endDate, "MM-dd-yyyy"));
    const [isDateApplied, setIsDateApplied] = useState(false);

    const [openPicker, setOpenPicker] = useState(false);

    const formattedRange = `${format(range[0].startDate, "MMM d, yyyy")} - ${format(
        range[0].endDate,
        "MMM d, yyyy"
    )}`;


    const { data, isLoading, error, isFetching } = useGetDashboardOverviewQuery({ from: from, to: to })
    // console.log("data", data)
    const pickerRef = useRef<HTMLDivElement>(null);
    const overview = data?.data?.overview || []
    // console.log("overview", overview)
    const totalOrders = overview?.totalOrders ?? 0
    const onHold = overview?.statusWise?.ON_HOLD ?? 0
    const cancelled = overview?.statusWise?.CANCELLED ?? 0
    const completed = overview?.statusWise?.COMPLETED ?? 0

    const inProgress = Math.max(
        totalOrders - (onHold + cancelled + completed),
        0 // safety: negative হলে 0
    )

    const orderCardsData = [
        {
            title: "Total Orders",
            count: totalOrders,
            percentage: 0,
            isPositive: true,
            icon: Package,
            details: ""
        },
        {
            title: "On Hold",
            count: onHold,
            percentage: 0,
            isPositive: false,
            icon: PauseCircle,
            details: ""
        },
        {
            title: "In Progress",
            count: inProgress,
            percentage: 0,
            isPositive: true,
            icon: Factory,
            details: ""
        },
        {
            title: "Cancelled",
            count: cancelled,
            percentage: 0,
            isPositive: false,
            icon: XCircle,
            details: ""
        },
        {
            title: "Completed Orders",
            count: completed,
            percentage: 0,
            isPositive: true,
            icon: CheckCircle,
            details: ""
        },
        {
            title: "Total Sales",
            count: `$ ${overview?.revenue?.total ?? 0}`,
            percentage: 0,
            isPositive: true,
            icon: DollarSign,
            details: overview?.revenue?.totalOrdersDescription ?? ""
        },
        {
            title: "Net Sales",
            count: `$ ${overview?.revenue?.net ?? 0}`,
            percentage: 0,
            isPositive: true,
            icon: DollarSign,
            details: overview?.revenue?.netRevenueDescription ?? ""
        }
    ]
    const revenueParams = isDateApplied
        ? { from, to }
        : {};
    const { data: revenueRes } = useGetDashboardReveniueQuery(revenueParams);
    const { data: pieRes, isLoading: isLoadingPie } = useGetDashboardPieQuery(revenueParams);
    const { data: categoryRes, isLoading: isLoadingCategory } = useGetDashboardChartCategoryQuery(revenueParams);
    // console.log("pie", pieRes)
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
                setOpenPicker(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [pickerRef]);

    return (
        <div className=" bg-gray-200 overflow-hidden">

            <div className="flex justify-between items-center bg-white p-5 rounde d-lg shadow-sm">
                {/* Left: Title + Description */}
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold text-gray-900">Dashboard Overview</h1>
                    <p className="text-sm text-gray-500">
                        Comprehensive insights into your website performance and user behavior.
                    </p>
                </div>

                {/* Right: Date Picker */}
                <div className="relative">
                    <button
                        className="flex items-center gap-2 border border-gray-300 rounded-none px-4 py-2 text-sm hover:bg-gray-50 transition"
                        onClick={() => setOpenPicker(!openPicker)}
                    >
                        <Calendar className="w-4 h-4 text-gray-600" />
                        {formattedRange}
                    </button>

                    {/* Date picker popup */}
                    {openPicker && (
                        <div ref={pickerRef} className="absolute right-0 mt-2 z-50">
                            <DateRangePicker
                                editableDateInputs={true}
                                onChange={(item: any) => {
                                    const start = item.selection.startDate;
                                    const end = item.selection.endDate;

                                    setRange([item.selection]);

                                    const formattedStart = format(start, "MM-dd-yyyy");
                                    const formattedEnd = format(end, "MM-dd-yyyy");

                                    setFrom(formattedStart);
                                    setIsDateApplied(true);
                                    if (formattedStart !== formattedEnd) {
                                        setTo(formattedEnd);
                                    } else {
                                        setTo("");
                                    }
                                }}
                                moveRangeOnFirstSelection={false}
                                ranges={range}
                                months={1}
                                showSelectionPreview={true}

                                direction="horizontal"
                                className="bg-white border rounded-none shadow-lg"
                            />

                            <div className="flex justify-end mt-2">
                                <button
                                    className="text-sm text-blue-600 px-3 py-1 hover:underline"
                                    onClick={() => setOpenPicker(false)}
                                >
                                    Done
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            </div>




            {/* Main Content */}
            <div className="">

                {/* Content */}
                <div className=" overflow-auto p-4 space-y-6">
                    {/* Stat Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5  gap-4">
                        {orderCardsData.map((card, i) => {
                            const Icon = card.icon // Lucide icon component

                            return (
                                <Card key={i} className="bg-white group text-b rounded-none shadow-2xl">
                                    <CardContent className="p-6 group-hover:bg-[#163556] group-hover:text-white transition duration-300">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-1">
                                                <h3 className="text-md font-semibold">{card.title}</h3>

                                                {card.details && (
                                                    <RevenueDescriptionTooltip description={card.details} className="group-hover:text-white" />
                                                )}
                                            </div>
                                            {Icon && (
                                                <span className="text-xl text-[#fdb40f]">
                                                    <Icon className="w-6 h-6" />
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-3xl font-bold">{card.count}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}

                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <SalesChart
                            title="Total Sales"
                            totalSales={overview?.revenue?.total ?? 0}
                            data={
                                data?.data.charts?.revenueBar?.map((r: any) => ({
                                    name: r.month,
                                    value: r.revenue,
                                })) ?? []
                            }
                            details={overview?.revenue?.totalOrdersDescription ?? ""}
                        />

                        <DeliveredChart
                            title="Orders Trend"
                            deliveredCount={overview?.totalOrders ?? 0}
                            data={
                                data?.data.charts?.ordersLine?.map((o: any) => ({
                                    name: o.date,
                                    value: o.orders,
                                })) ?? []
                            }
                            details={overview?.revenue?.totalOrdersDescription ?? ""}

                        />
                    </div>
                    {/* Charts Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-9 gap-6">
                        <div className="col-span-7 space-y-6">

                            {/* <ColumnChart title="Total Revenue" data={revenueRes?.data ?? []} /> */}

                            <AreaChart
                                title="Total Revenue"
                                data={revenueRes?.data ?? []}
                            />
                            <CategoryBar data={categoryRes?.data ?? []} isLoading={isLoadingCategory} />


                            {/* <TopCustomers customers={dashboardData.topCustomers} /> */}
                        </div>
                        <div className="space-y-6 col-span-2">

                            {/* Status Pie Chart */}
                            <StatusPieChart title="Order Status Distribution" data={pieRes?.data ?? []} />
                            <OrderTypeChart data={pieRes?.data ?? []} isLoading={isLoadingPie} />

                            <TopCustomers customers={data?.data?.topCustomers} />
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}


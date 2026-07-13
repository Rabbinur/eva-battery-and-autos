export default function Home() {
  return (
    <div className="w-full h-screen ">
      <section class="bg-background py-24">
        <div class="max-w-6xl mx-auto px-6 text-center">

          <span class="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
            🚀 Trusted by 5,000+ teams
          </span>

          <h1 class="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Build Reports 10x Faster
          </h1>

          <p class="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Automate your workflow, generate AI-powered reports,
            and scale your operations effortlessly.
          </p>

          <div class="mt-8 flex justify-center gap-4">
            <button class="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg text-lg transition">
              Start Free Trial
            </button>

            <button class="border border-border px-6 py-3 rounded-lg text-lg hover:bg-muted transition">
              Live Demo
            </button>
          </div>

        </div>
      </section>
      <section class="py-24 bg-muted/30">
        <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {/* <!-- Basic --> */}
          <div class="bg-card p-8 rounded-2xl border shadow-sm">
            <h3 class="text-xl font-semibold">Basic</h3>
            <p class="mt-4 text-4xl font-bold">$19</p>
            <button class="mt-6 w-full border border-border py-3 rounded-lg hover:bg-muted transition">
              Get Started
            </button>
          </div>

          {/* <!-- Most Popular --> */}
          <div class="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl scale-105">
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">
              Most Popular
            </span>
            <h3 class="mt-4 text-xl font-semibold">Pro</h3>
            <p class="mt-4 text-4xl font-bold">$49</p>
            <button class="mt-6 w-full bg-white text-primary py-3 rounded-lg font-semibold">
              Upgrade Now
            </button>
          </div>

          {/* <!-- Enterprise --> */}
          <div class="bg-card p-8 rounded-2xl border shadow-sm">
            <h3 class="text-xl font-semibold">Enterprise</h3>
            <p class="mt-4 text-4xl font-bold">Custom</p>
            <button class="mt-6 w-full border border-border py-3 rounded-lg hover:bg-muted transition">
              Contact Sales
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

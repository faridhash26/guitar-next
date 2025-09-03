import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.15),transparent),radial-gradient(40%_35%_at_80%_10%,rgba(16,185,129,0.12),transparent)] text-[hsl(var(--foreground))]">
      <nav className="container mx-auto flex items-center justify-between py-5">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-emerald-500/90 shadow-md" />
          <span className="font-semibold tracking-tight">GuitarViz</span>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost">
            <Link href="/about">درباره</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/features">امکانات</Link>
          </Button>
          <Button asChild>
            <Link href="/login">ورود</Link>
          </Button>
        </div>
      </nav>
      <section className="container mx-auto grid lg:grid-cols-2 gap-8 items-center py-12 md:py-20">
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            اپِ گیتار: تشخیص نت و نمایش روی فرت‌برد
            <span className="block bg-gradient-to-r from-emerald-500 to-indigo-500 bg-clip-text text-transparent">
              دقیق، سریع، قابل اعتماد
            </span>
          </h1>
          <p className="mt-4 text-base md:text-lg opacity-80 leading-7">
            با یک ضربه روی سیم، نتِ در حال نواختن را از میکروفون تشخیص بده و همان لحظه روی فرت‌برد ببین کجا گرفته می‌شود.
            تمرین کوک، یادگیری پوزیشن‌ها و اجرای تمیزتر، همه در یک جا.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="shadow">
              <Link href="/login">ورود</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/signup">ثبت‌نام</Link>
            </Button>
            <span className="text-sm opacity-60">نسخهٔ پایه رایگان است</span>
          </div>
          {/* Key stats */}
          <div className="mt-8 flex items-center gap-6">
            <div>
              <div className="text-2xl font-bold">±5¢</div>
              <div className="text-xs opacity-60">دقت تشخیص</div>
            </div>
            <div>
              <div className="text-2xl font-bold">E2–E6</div>
              <div className="text-xs opacity-60">پوشش فرکانسی گیتار</div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl border border-[hsl(var(--border))] bg-white/70 p-6 shadow-xl backdrop-blur">
            <div className="absolute -top-10 -left-10 h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="absolute -bottom-12 -right-16 h-56 w-56 rounded-full bg-indigo-400/20 blur-3xl" />
            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="text-xs opacity-60">پیش‌نمایش فرت‌برد</div>
              </div>


              {/* Simple fretboard visual */}
              <div className="grid gap-2">
                {["E4", "B3", "G3", "D3", "A2", "E2"].map((s) => (
                  <div key={s} className="relative h-12 rounded-xl border bg-white/80">
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gray-300" />
                    <div className="absolute inset-y-2 right-16 w-1 rounded bg-gray-300" />
                    <div className="absolute inset-y-2 right-28 w-1 rounded bg-gray-300" />
                    <div className="absolute inset-y-2 right-40 w-1 rounded bg-gray-300" />
                    <div className="absolute inset-y-2 right-52 w-1 rounded bg-gray-300" />
                    <div className="absolute inset-y-2 right-64 w-1 rounded bg-gray-300" />
                    {/* highlighted note */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-40 h-7 w-7 -translate-x-1/2 rounded-full bg-emerald-500/20 ring-2 ring-emerald-500 flex items-center justify-center text-[10px] font-semibold text-emerald-800">
                      A4
                    </div>
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[11px] opacity-60 font-mono">
                      {s}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 text-xs">
                <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-emerald-800 ring-1 ring-emerald-500">نت جاری: A4 • 440Hz • +2¢</span>
                <span className="opacity-60">(دمو)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-10 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "نمایش روی فرت‌برد", desc: "پوزیشن‌های معادلِ هر نت به‌صورت آنی هایلایت می‌شود." },
            { title: "کوک کروماتیک", desc: "تشخیص خودکار نت با نمایش اختلاف سنت برای کوک دقیق." },
            { title: "تیونینگ‌های مختلف", desc: "استاندارد، Drop D، و تیونینگ‌های سفارشی." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border p-6">
              <div className="text-lg font-semibold">{f.title}</div>
              <p className="mt-2 text-sm opacity-70">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(var(--border))] bg-white/60">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:flex-row">
          <div>
            <div className="text-xl font-semibold">همین الان شروع کن</div>
            <p className="text-sm opacity-70">با ورود، فرت‌برد زنده و تیونر را فعال کن.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild size="lg">
              <Link href="/login">ورود</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/signup">ثبت‌نام</Link>
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}

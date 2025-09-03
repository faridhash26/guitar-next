import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
    return (
        <main className="min-h-screen grid place-items-center bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-emerald-950">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-[hsl(var(--border))] bg-white/70 p-8 shadow-2xl backdrop-blur-xl dark:bg-gray-900/80">
                <div className="pointer-events-none absolute -top-20 -left-20 h-40 w-40 rounded-full bg-emerald-400/30 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -right-24 h-48 w-48 rounded-full bg-indigo-400/30 blur-3xl" />
                <div className="relative mb-6 flex items-center justify-center gap-2">
                    <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-indigo-500 shadow-lg" />
                    <div className="text-lg font-semibold tracking-tight">GuitarViz</div>
                </div>
                <h1 className="relative text-center text-3xl font-extrabold leading-tight">
                    خوش برگشتی 🎸
                </h1>
                <p className="mt-2 text-center text-sm opacity-70">
                    برای استفاده از تیونر و فرت‌برد زنده وارد شو
                </p>
                <form className="relative mt-8 grid gap-5">
                    <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium opacity-80">
                            ایمیل
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="h-12 rounded-xl border bg-white px-4 text-sm shadow-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-950"
                        />
                    </div>


                    <div className="grid gap-2">
                        <label htmlFor="password" className="text-sm font-medium opacity-80">
                            رمز عبور
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="h-12 rounded-xl border bg-white px-4 text-sm shadow-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-950"
                        />
                    </div>


                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 select-none">
                            <input type="checkbox" name="remember" className="h-4 w-4 rounded border accent-emerald-500" />
                            من را به خاطر بسپار
                        </label>
                        <Link href="/forgot" className="text-emerald-600 hover:underline">
                            فراموشی رمز
                        </Link>
                    </div>


                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-emerald-500 to-indigo-500 text-white shadow-lg hover:opacity-90">
                        ورود
                    </Button>
                </form>
                <div className="mt-6 text-center text-sm">
                    حساب نداری؟ {" "}
                    <Link href="/signup" className="font-medium text-emerald-600 hover:underline">
                        ثبت‌نام
                    </Link>
                </div>
                <div className="my-6 flex items-center gap-3 text-xs opacity-60">
                    <div className="h-px flex-1 bg-[hsl(var(--border))]" />یا<div className="h-px flex-1 bg-[hsl(var(--border))]" />
                </div>
                <div className="grid gap-3">
                    <Button variant="outline" className="w-full justify-center gap-2 font-medium shadow-sm" asChild>
                        <a href="/api/auth/google">🔑 ادامه با Google</a>
                    </Button>
                    <Button variant="outline" className="w-full justify-center gap-2 font-medium shadow-sm" asChild>
                        <a href="/api/auth/github">💻 ادامه با GitHub</a>
                    </Button>
                </div>
            </div>
        </main>
    )
}

export default LoginPage
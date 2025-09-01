"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import heroImg from "@/public/cineGen.png";
import { Button, Card, CardContent } from "@mui/material";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col min-h-screen font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              CineGen
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
              Transform your ideas into professional short videos —
              effortlessly, quickly, and reliably.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="large"
                className="bg-blue-600 text-white font-semibold rounded-md px-6 py-2 hover:bg-blue-700 transition-colors"
                onClick={() => router.push("/api/auth/signin")}
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <Image
              src={heroImg}
              alt="CineGen Preview"
              width={480}
              height={320}
              className="rounded-lg shadow-md w-full max-w-md mx-auto lg:max-w-none"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-900 mb-12">
          Why Choose CineGen?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            {
              title: "Effortless Video Creation",
              desc: "Produce short videos with a streamlined, user-friendly workflow.",
            },
            {
              title: "Scalable & Reliable",
              desc: "Leverage robust cloud infrastructure to meet your growing needs.",
            },
            {
              title: "Transparent Pricing",
              desc: "Clear, flexible plans with no surprises—upgrade anytime.",
            },
          ].map((feature, idx) => (
            <Card
              key={idx}
              className="rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
          Ready to create your first video?
        </h3>
        <Button
          size="large"
          className="bg-blue-600 text-white font-semibold rounded-md px-6 py-2 hover:bg-blue-700 transition-colors"
          onClick={() => router.push("/api/auth/signin")}
        >
          Start Creating
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 text-gray-500 text-center py-6">
        <p>© {new Date().getFullYear()} CineGen. All rights reserved.</p>
      </footer>
    </main>
  );
}

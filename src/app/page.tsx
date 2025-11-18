import type { Metadata } from "next";
import Link from "next/link";

const features = [
  {
    icon: "📝",
    title: "풍부한 노트 작성",
    description:
      "일반 텍스트는 물론, 할 일을 관리할 수 있는 체크리스트까지 한 번에 기록하세요.",
  },
  {
    icon: "📂",
    title: "스마트한 정리",
    description:
      "폴더와 태그로 원하는 방식으로 분류하고, 중요한 노트는 상단에 고정할 수 있습니다.",
  },
  {
    icon: "🖼️",
    title: "이미지 첨부",
    description:
      "갤러리나 카메라로 촬영한 사진을 바로 추가해 더 생생한 기록을 남겨보세요.",
  },
  {
    icon: "🔍",
    title: "강력한 검색",
    description:
      "제목, 내용, 태그를 한 번에 검색해 필요한 노트를 순식간에 찾을 수 있습니다.",
  },
];

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f2eeff] to-[#e6e3ff] text-slate-900">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <p className="text-xl font-semibold tracking-tight text-[#6c4cf5]">
          Novita
        </p>
        <nav className="flex gap-6 text-sm font-medium text-slate-600">
          <a href="#features" className="transition hover:text-[#6c4cf5]">
            주요 기능
          </a>
          <Link href="/privacy" className="transition hover:text-[#6c4cf5]">
            개인정보 처리방침
          </Link>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-8">
        <section className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6c4cf5]">
                로컬에서 안전하게
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                당신의 모든 생각을 쉽고 아름답게 기록하세요.
              </h1>
              <p className="text-lg text-slate-600">
                Novita는 텍스트, 체크리스트, 사진까지 모든 것을 담을 수 있는
                당신만의 스마트한 노트 앱입니다. 데이터는 오직 당신의 기기에만
                저장되어 더 안전합니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(108,76,245,0.15)] transition hover:-translate-y-0.5 hover:border-[#6c4cf5] hover:text-[#6c4cf5]"
              >
                Google Play에서 받기
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-[#2d1db6] px-6 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(45,29,182,0.35)] transition hover:-translate-y-0.5 hover:bg-[#241794]"
              >
                App Store에서 받기
              </a>
            </div>
            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <p className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#6c4cf5]" />
                데이터는 클라우드로 업로드되지 않습니다.
              </p>
              <p className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#6c4cf5]" />
                학생, 직장인 모두를 위한 직관적인 인터페이스
              </p>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -inset-6 rounded-[42px] bg-[#d5ccff]/60 blur-3xl" />
            <div className="relative h-[520px] w-[280px] rounded-[38px] bg-white p-5 shadow-[0_25px_60px_rgba(18,11,54,0.15)]">
              <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-slate-200" />
              <p className="text-sm font-semibold text-slate-500">Novita</p>
              <div className="mt-5 space-y-4">
                <div className="rounded-3xl bg-[#6c4cf5] p-4 text-white">
                  <p className="text-sm font-medium">Available Space</p>
                  <p className="text-2xl font-semibold">0.00 GB of 25 GB</p>
                  <div className="mt-3 h-2 rounded-full bg-white/30">
                    <span className="block h-2 w-2 rounded-full bg-white" />
                  </div>
                </div>
                <div className="flex max-h-[240px] flex-col gap-3 overflow-hidden rounded-3xl bg-slate-50/60 p-3 shadow-inner">
                  <PreviewCard title="개인" subtitle="2 files" accent="#cfd8ff" />
                  <PreviewCard title="기타" subtitle="0 files" accent="#ecd9ff" />
                  <PreviewCard title="업무" subtitle="0 files" accent="#d9f1e2" />
                  <PreviewCard title="학업" subtitle="0 files" accent="#ffe8cf" />
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-600">오늘의 노트</p>
                <p className="mt-2 text-xs text-slate-500">
                  124124124124 · 2025.11.12
                </p>
                <p className="text-sm text-slate-700">123124124</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6c4cf5]">
              Features
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              노트를 쓰는 모든 순간을 더 편리하게
            </h2>
            <p className="text-base text-slate-600">
              입력, 정리, 검색, 기록까지. Novita가 모든 흐름을 매끄럽게 연결해
              드립니다.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-7 shadow-[0_20px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1"
              >
                <div className="text-2xl">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/50 bg-white/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2024 Railit. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#features" className="hover:text-[#6c4cf5]">
              주요 기능
            </a>
            <Link href="/privacy" className="hover:text-[#6c4cf5]">
              개인정보 처리방침
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

type PreviewCardProps = {
  title: string;
  subtitle: string;
  accent: string;
};

function PreviewCard({ title, subtitle, accent }: PreviewCardProps) {
  return (
    <div
      className="rounded-2xl border border-slate-100 px-4 py-3"
      style={{ backgroundColor: accent }}
    >
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <p className="text-[11px] text-slate-600">{subtitle}</p>
    </div>
  );
}

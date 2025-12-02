import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  description:
    "Novita 앱에서 수집·이용하는 데이터와 사용자 개인정보 보호 정책을 확인하세요.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-semibold text-[#6c4cf5]">
            Novita
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-slate-500 transition hover:text-[#6c4cf5]"
          >
            랜딩 페이지로 돌아가기
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-6 py-16">
        <div className="space-y-4">
          <p className="text-sm font-medium text-[#6c4cf5]">Railit</p>
          <h1 className="text-3xl font-semibold">Novita 개인정보 처리방침</h1>
          <p className="text-base text-slate-600">
            Railit(이하 “회사”)은 Novita 앱 사용자(이하 “사용자”)의 개인정보를
            소중하게 보호하며, 관련 법령과 Google Play 스토어 정책을 준수합니다.
            본 개인정보 처리방침은 Novita 앱이 수집하는 정보, 이용 목적, 보안
            조치 및 문의 방법을 설명합니다.
          </p>
        </div>

        <section className="mt-12 space-y-6">
          <Article
            title="1. 수집하는 정보"
            body={[
              "회사는 서비스 제공 및 안정적인 앱 운영을 위해 다음과 같은 데이터를 수집합니다.",
            ]}
            list={[
              "계정 정보: Worklife Dashboard 연동 시 이메일 주소 및 사용자 식별 정보",
              "동기화 데이터: 노트 내용, 폴더 구조, 태그 등 사용자가 작성한 콘텐츠 (클라우드 동기화 활성화 시)",
              "앱 활동 데이터: 화면 조회 이력, 기능 사용 빈도 등 (Firebase Analytics)",
              "비정상 종료 로그: 앱 크래시 시점 및 스택 정보 (Firebase Crashlytics)",
              "앱 성능 데이터: 앱 시작 시간, 렌더링 속도, 디바이스 성능 지표",
            ]}
            note="※ 클라우드 동기화를 사용하지 않는 경우, 노트 데이터는 기기에만 저장되며 서버로 전송되지 않습니다."
          />
          <Article
            title="2. 정보 이용 목적"
            body={[
              "수집된 데이터는 다음의 목적을 위해서만 사용되며, 그 외 용도로는 활용하지 않습니다.",
            ]}
            list={[
              "클라우드 동기화: Worklife Dashboard와의 실시간 데이터 동기화 제공",
              "서비스 품질 개선 및 새로운 기능 기획",
              "사용자 경험 향상 및 사용성 분석",
              "버그 수정, 비정상 종료 원인 파악 및 기술적 문제 해결",
            ]}
          />
          <Article
            title="3. 데이터 보안"
            body={[
              "Novita는 사용자 데이터를 보호하기 위해 다음과 같은 조치를 시행합니다.",
            ]}
            list={[
              "모든 데이터 전송은 HTTPS 프로토콜을 통해 암호화됩니다.",
              "클라우드 동기화 데이터는 Worklife Dashboard 서버에 안전하게 저장되며, 암호화되어 관리됩니다.",
              "사용자 인증은 안전한 OAuth 방식을 통해 처리됩니다.",
              "필요 최소한의 데이터만을 수집하며, 분석 데이터는 익명화하여 처리합니다.",
            ]}
          />
          <Article
            title="4. 사용자 권리"
            body={["사용자는 다음과 같은 권리를 가집니다."]}
            list={[
              "클라우드 동기화를 언제든지 활성화하거나 비활성화할 수 있습니다.",
              "Worklife Dashboard 계정 연동을 해제하여 동기화를 중단할 수 있습니다.",
              "앱 설정에서 분석 데이터 수집을 비활성화할 수 있습니다.",
              "계정 삭제 요청 시 관련 데이터를 완전히 삭제할 수 있습니다.",
            ]}
          />
          <Article
            title="5. 문의처"
            body={[
              "개인정보 또는 데이터 보호 관련 문의는 아래 연락처로 보내주시기 바랍니다.",
              "이메일: contact@railit.com",
            ]}
          />
          <Article
            title="6. 개인정보 처리방침 변경"
            body={[
              "회사는 법령 변경 또는 서비스 개선에 따라 본 방침을 수정할 수 있습니다. 중요한 변경 사항이 있을 경우 앱 내 공지 또는 웹사이트를 통해 안내합니다.",
            ]}
          />
        </section>

        <p className="mt-12 text-sm text-slate-500">
          시행일: 2024년 11월 18일
        </p>
      </main>
    </div>
  );
}

type ArticleProps = {
  title: string;
  body: string[];
  list?: string[];
  note?: string;
};

function Article({ title, body, list, note }: ArticleProps) {
  return (
    <article className="space-y-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <div className="space-y-3">
        {body.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-relaxed text-slate-600">
            {paragraph}
          </p>
        ))}
      </div>
      {list && (
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {note && (
        <p className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-[#6c4cf5]">
          {note}
        </p>
      )}
    </article>
  );
}


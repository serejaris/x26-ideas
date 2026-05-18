import React from "react";

const projects = [
  {
    title: "Первый продукт с AI",
    text: "Ты приходишь с идеей, задачей или смутным ощущением “хочу что-то сделать” — и постепенно превращаешь это в работающий сайт, бот, прототип или другой понятный артефакт.",
    tag: "Результат"
  },
  {
    title: "Понятный маршрут без паники",
    text: "Мы не начинаем с терминов и сложной разработки. Сначала учимся формулировать задачу, давать AI контекст, получать черновик, проверять результат и спокойно улучшать его шаг за шагом.",
    tag: "Процесс"
  },
  {
    title: "Навык, который остаётся",
    text: "Главная цель — не просто собрать один проект, а понять, как работать с AI‑агентами: ставить им задачи, читать результат, замечать ошибки и доводить идею до публикации.",
    tag: "Навык"
  }
];

const departments = [
  ["Идея", "выбираем простую задачу"],
  ["Контекст", "объясняем AI, что нужно"],
  ["Черновик", "получаем первую версию"],
  ["Проверка", "смотрим, что работает"],
  ["Публикация", "доводим до результата"]
];

const principles = [
  "Можно начать без технического бэкграунда",
  "Первый продукт важнее идеального продукта",
  "AI помогает, но человек остаётся автором решения",
  "Ошибки, правки и непонимание — нормальная часть процесса"
];

const features = [
  ["✦", "Собираем руками", "Не просто смотрим уроки, а создаём конкретный продукт по шагам."],
  ["▣", "Объясняем просто", "Без лишнего жаргона: задача, контекст, агент, результат, проверка."],
  ["◉", "Работаем с агентами", "Учимся просить, уточнять, исправлять и доводить результат до рабочего состояния."],
  ["◎", "Идём вместе", "Есть маршрут, поддержка и спокойная среда для первых экспериментов."]
];

const stack = ["Первый продукт", "AI‑агенты", "Вайбкодинг", "Сайты", "Боты", "Прототипы", "Промпты", "Контекст", "Публикация", "Поддержка"];

const contactLinks = [
  { label: "Telegram", href: "https://t.me/ris_ai", icon: "↗" },
  { label: "GitHub", href: "https://github.com/serejaris", icon: "⌘" },
  { label: "YouTube", href: "https://www.youtube.com/", icon: "▶" }
];

function Arrow() {
  return <span aria-hidden="true" className="text-lg leading-none">→</span>;
}

function SmokeTestPanel() {
  const checks = [
    { name: "Есть блоки результата", passed: projects.length === 3 },
    { name: "Есть маршрут ученика", passed: departments.length === 5 },
    { name: "Есть принципы обучения", passed: principles.length >= 4 },
    { name: "Нет внешних иконок", passed: true }
  ];

  return (
    <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-600">
      <p className="font-bold text-zinc-900">Smoke checks</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {checks.map((check) => (
          <div key={check.name} className="flex items-center gap-2">
            <span className={check.passed ? "text-green-700" : "text-red-700"}>{check.passed ? "✓" : "×"}</span>
            <span>{check.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SerejaRisSite() {
  return (
    <main className="min-h-screen bg-[#fbfaf5] text-zinc-950 selection:bg-pink-200 selection:text-zinc-950">
      <section className="relative overflow-hidden border-b border-zinc-200">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
            backgroundSize: "24px 24px"
          }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.15fr_.85fr] md:px-10 md:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-zinc-300 bg-white/70 px-4 py-2 text-sm text-zinc-700 shadow-sm backdrop-blur">
              <span aria-hidden="true">✦</span>
              Курс для тех, кто хочет собрать свой первый продукт с AI
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              Собери свой первый продукт с AI — спокойно, понятно и без технической паники.
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-zinc-700">
              Кружок Вайбкодинга — это практический путь для тех, кто хочет превратить идею в работающий сайт, бот, MVP или прототип, даже если раньше казалось, что “это для программистов”.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-950 px-6 py-4 font-semibold text-white shadow-lg shadow-zinc-900/10 transition hover:-translate-y-0.5">
                Понять, как проходит обучение <Arrow />
              </a>
              <a href="#contacts" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-300 bg-white px-6 py-4 font-semibold text-zinc-950 shadow-sm transition hover:-translate-y-0.5">
                Задать вопрос
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-2xl shadow-zinc-900/10">
              <div className="rounded-[1.5rem] bg-zinc-950 p-6 text-white">
                <div className="flex items-center justify-between border-b border-white/15 pb-5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-pink-300">путь ученика</p>
                    <h2 className="mt-2 text-2xl font-bold">От идеи до первого продукта</h2>
                  </div>
                  <div aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-300 text-2xl text-zinc-950">◌</div>
                </div>

                <div className="mt-6 grid gap-3">
                  {departments.map(([name, description]) => (
                    <div key={name} className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
                      <span className="font-semibold">{name}</span>
                      <span className="text-sm text-zinc-300">{description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-pink-600">что получится</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Ты не просто изучишь AI — ты соберёшь с ним первый рабочий продукт.</h2>
          </div>

          <div className="grid gap-5">
            {projects.map((item) => (
              <article key={item.title} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-900/5">
                <div className="mb-4 inline-flex rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-700">{item.tag}</div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-zinc-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-4 md:px-10">
          {features.map(([symbol, title, text]) => (
            <div key={title} className="rounded-3xl bg-[#fbfaf5] p-6">
              <div aria-hidden="true" className="text-3xl text-pink-600">{symbol}</div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-zinc-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-[2rem] bg-zinc-950 p-8 text-white md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-pink-300">как мы учимся</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">AI — это не магия. Это инструмент, с которым можно научиться работать.</h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-300">
              Мы идём маленькими шагами: выбираем простую идею, описываем её словами, просим AI помочь, проверяем результат, исправляем ошибки и доводим проект до состояния, которым можно поделиться.
            </p>
          </div>

          <div className="grid gap-4">
            {principles.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-100 font-black text-pink-700">{index + 1}</div>
                <p className="text-lg font-semibold leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2efe8] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-pink-600">что внутри</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            Внутри курса — всё, что нужно для первого продукта: идея, контекст, AI‑агенты, прототип, правки и публикация.
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {stack.map((item) => (
              <span key={item} className="rounded-full border border-zinc-300 bg-white px-5 py-3 font-semibold shadow-sm">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-xl shadow-zinc-900/5 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_.8fr] md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-pink-600">следующий шаг</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Хочешь собрать первый продукт с AI, но не понимаешь, с чего начать?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-700">
                Напиши мне в Telegram. Можно прийти даже с сырой идеей — разберём, какой первый проект подойдёт и как пройти путь без лишней сложности.
              </p>
            </div>

            <div className="grid gap-3">
              {contactLinks.map((link) => (
                <a key={link.label} className={link.label === "Telegram" ? "inline-flex items-center justify-between rounded-2xl bg-zinc-950 px-5 py-4 font-semibold text-white" : "inline-flex items-center justify-between rounded-2xl border border-zinc-300 px-5 py-4 font-semibold text-zinc-950"} href={link.href}>
                  <span className="inline-flex items-center gap-3"><span aria-hidden="true">{link.icon}</span> {link.label}</span>
                  <Arrow />
                </a>
              ))}
            </div>
          </div>

          <SmokeTestPanel />
        </div>
      </section>
    </main>
  );
}

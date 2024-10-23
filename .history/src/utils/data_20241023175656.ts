interface Skill {
  skill: string;
  skillLevel: string;
  percentage: string;
}

interface SkillSection {
  title: string;
  icon: string;
  skills: Skill[];
}

interface Experience {
  title: string;
  date: string;
  responsibilities: string[];
}

interface PortfolioItem {
  title: string;
  link: string;
  img: string;
  comment: string;
}

export const SKILLS = [
  {
    title: "Frontend",
    icon: "./assets/images/frontend-icon.svg",
    skills: [
      { skill: "HTML5", skillLevel: "Entry", percentage: "40%" },
      { skill: "CSS3", skillLevel: "Entry", percentage: "40%" },
      { skill: "JavaScript", skillLevel: "Entry", percentage: "40%" },
      { skill: "React.js", skillLevel: "Studying", percentage: "20%" },
    ],
  },
  {
    title: "Backend",
    icon: "./assets/images/backend-icon.svg",
    skills: [
      { skill: "Node.js", skillLevel: "Studying", percentage: "20%" },
      { skill: "Express.js", skillLevel: "Studying", percentage: "20%" },
      { skill: "Java", skillLevel: "Entry", percentage: "40%" },
    ],
  },
  {
    title: "Data Base",
    icon: "./assets/images/database-icon.svg",
    skills: [
      { skill: "PostgreSQL", skillLevel: "Entry", percentage: "40%" },
      { skill: "MongoDB", skillLevel: "Entry", percentage: "40%" },
      { skill: "Oracle", skillLevel: "Entry", percentage: "40%" },
    ],
  },
  {
    title: "Tools",
    icon: "./assets/images/tools-icon.svg",
    skills: [
      { skill: "Git & GitHub", skillLevel: "Studying", percentage: "20%" },
      { skill: "Visual Studio Code", skillLevel: "Entry", percentage: "40%" },
      { skill: "Eclipse", skillLevel: "Entry", percentage: "40%" },
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    title: "帝京大学情報科学科通信教育課程",
    date: "2022年4月 - 2026年3月卒業予定",
    responsibilities: [
      "IT分野の知識を深めるために、情報科学・情報工学の基礎知識から応用技術までを学習し、ネットワーク基礎、データベース設計、アルゴリズム、アセンブリ言語（CASL-ii）などの科目に取り組んでいます。",
      "プログラミングにおいては、Javaのオブジェクト指向プログラミングを用いた演習課題を通して開発スキルを身に着けています。具体的な演習内容は、複数言語のあいさつを管理し、入力された言語に合わせて適切なあいさつを返すプログラムや、生徒名簿を管理するプログラムをオブジェクト指向を用いて実装しました。",
      "また、数学の基礎理論や応用数学も学び、論理的思考力を強化しています",
      "ITについて体系的に学びたいという意欲から入学を決意し、現在も業務に支障がない範囲で継続的に学習を進めています。",
    ],
  },
  {
    title: "工業系システム開発(Java)",
    date: "2024年8月 - 2024年10月",
    responsibilities: [
      "工業系会社の製品ラベル管理システムの開発携わりました。",
      "詳細設計から開発、単体テスト仕様書作成までを担当し、システム開発の基本プロセスを一通り経験しました。",
      "周りの先輩エンジニアと密に連携し、フィードバックを元に業務を進めることで、期限内に業務を完了させるとともに、自分のスキルを向上させることができました。",
    ],
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    title: "ポートフォリオサイト",
    link: "#",
    img: "./assets/images/site-01.png",
    comment: "Reactを使った自己紹介サイトです。",
  },
  {
    title: "時差グラフサイト",
    link: "#",
    img: "#",
    comment: "作成中です",
  },
];

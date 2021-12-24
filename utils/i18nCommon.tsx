type FieldIf = {
  [key: string]: string
}

type Texti18nIf = {
  [key: string]: FieldIf
}

export const texti18n: Texti18nIf = {
  vn: {
    document: "Tài liệu",
    home: "Trang chủ",
    chess: "Cờ vua",
    endGame: "Tàn cuộc",
    beginner: "Người mới",
    levels: "Các cấp độ",
    classE: "Lớp E",
    classD: "Lớp D",
    dashboard: "Trang chủ",
    endgame: "Tàn cuộc",
    mainTitle: "Tài liệu",
    language: "Tiếng Việt",
    content: "Nội dung",
  },
  en: {
    document: "Document",
    home: "Home",
    chess: "Chess",
    endGame: "End Game",
    beginner: "Beginner",
    levels: "Levels",
    classE: "Class E",
    classD: "Class D",
    dashboard: "Dashboard",
    endgame: "End game",
    mainTitle: "Document",
    language: "English",
    content: "Content",
  }
}

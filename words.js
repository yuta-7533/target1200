const words = [
  {
    "word": "change",
    "meaning": "変える"
  },
  {
    "word": "learn",
    "meaning": "学ぶ"
  },
  {
    "word": "help",
    "meaning": "手伝う，助ける"
  },
  {
    "word": "need",
    "meaning": "必要とする"
  },
  {
    "word": "live",
    "meaning": "住んでいる"
  },
  {
    "word": "ask",
    "meaning": "頼む"
  },
  {
    "word": "enjoy",
    "meaning": "楽しむ"
  },
  {
    "word": "wait",
    "meaning": "待つ"
  },
  {
    "word": "cook",
    "meaning": "調理する"
  },
  {
    "word": "talk",
    "meaning": "話す (t-)"
  },
  {
    "word": "speak",
    "meaning": "話す (s-)"
  },
  {
    "word": "meet",
    "meaning": "会う"
  },
  {
    "word": "mean",
    "meaning": "意味する"
  },
  {
    "word": "buy",
    "meaning": "買う"
  },
  {
    "word": "travel",
    "meaning": "旅行する"
  },
  {
    "word": "build",
    "meaning": "建てる"
  },
  {
    "word": "close",
    "meaning": "閉じる"
  },
  {
    "word": "stay",
    "meaning": "滞在する"
  },
  {
    "word": "move",
    "meaning": "動かす"
  },
  {
    "word": "plan",
    "meaning": "計画する"
  },
  {
    "word": "write",
    "meaning": "書く"
  },
  {
    "word": "listen",
    "meaning": "聞く (l-)"
  },
  {
    "word": "happen",
    "meaning": "起こる，生じる"
  },
  {
    "word": "lose",
    "meaning": "失う，なくす"
  },
  {
    "word": "stand",
    "meaning": "立つ，立っている"
  },
  {
    "word": "grow",
    "meaning": "育つ"
  },
  {
    "word": "sound",
    "meaning": "〜のように聞こえる"
  },
  {
    "word": "rain",
    "meaning": "雨が降る"
  },
  {
    "word": "worry",
    "meaning": "心配する"
  },
  {
    "word": "teach",
    "meaning": "教える"
  },
  {
    "word": "hope",
    "meaning": "望む"
  },
  {
    "word": "hold",
    "meaning": "持つ，抱える"
  },
  {
    "word": "life",
    "meaning": "一生，生涯"
  },
  {
    "word": "thing",
    "meaning": "事"
  },
  {
    "word": "country",
    "meaning": "国"
  },
  {
    "word": "example",
    "meaning": "例"
  },
  {
    "word": "place",
    "meaning": "場所"
  },
  {
    "word": "part",
    "meaning": "部分"
  },
  {
    "word": "trip",
    "meaning": "旅行"
  },
  {
    "word": "problem",
    "meaning": "問題"
  },
  {
    "word": "question",
    "meaning": "質問"
  },
  {
    "word": "color",
    "meaning": "色"
  },
  {
    "word": "point",
    "meaning": "要点"
  },
  {
    "word": "language",
    "meaning": "言語"
  },
  {
    "word": "word",
    "meaning": "単語，語"
  },
  {
    "word": "health",
    "meaning": "健康"
  },
  {
    "word": "report",
    "meaning": "報告書"
  },
  {
    "word": "minute",
    "meaning": "分"
  },
  {
    "word": "reason",
    "meaning": "理由"
  },
  {
    "word": "line",
    "meaning": "路線"
  },
  {
    "word": "month",
    "meaning": "（暦の）月"
  },
  {
    "word": "week",
    "meaning": "週"
  },
  {
    "word": "date",
    "meaning": "日にち"
  },
  {
    "word": "event",
    "meaning": "行事"
  },
  {
    "word": "future",
    "meaning": "未来，将来"
  },
  {
    "word": "design",
    "meaning": "デザイン"
  },
  {
    "word": "end",
    "meaning": "終わり"
  },
  {
    "word": "computer",
    "meaning": "コンピューター"
  },
  {
    "word": "plant",
    "meaning": "植物"
  },
  {
    "word": "art",
    "meaning": "美術"
  },
  {
    "word": "chance",
    "meaning": "機会，好機"
  },
  {
    "word": "history",
    "meaning": "歴史"
  },
  {
    "word": "festival",
    "meaning": "祭り"
  },
  {
    "word": "season",
    "meaning": "季節"
  },
  {
    "word": "fun",
    "meaning": "楽しみ"
  },
  {
    "word": "host",
    "meaning": "主人"
  },
  {
    "word": "message",
    "meaning": "伝言"
  },
  {
    "word": "step",
    "meaning": "段階"
  },
  {
    "word": "popular",
    "meaning": "人気のある"
  },
  {
    "word": "most",
    "meaning": "大部分の"
  },
  {
    "word": "different",
    "meaning": "違う"
  },
  {
    "word": "such",
    "meaning": "そのような"
  },
  {
    "word": "last",
    "meaning": "この前の"
  },
  {
    "word": "same",
    "meaning": "同じ"
  },
  {
    "word": "great",
    "meaning": "すばらしい (g-)"
  },
  {
    "word": "open",
    "meaning": "開いている"
  },
  {
    "word": "own",
    "meaning": "自分自身の"
  },
  {
    "word": "kind",
    "meaning": "親切な"
  },
  {
    "word": "difficult",
    "meaning": "難しい"
  },
  {
    "word": "enough",
    "meaning": "十分な"
  },
  {
    "word": "special",
    "meaning": "特別な"
  },
  {
    "word": "famous",
    "meaning": "有名な"
  },
  {
    "word": "bad",
    "meaning": "悪い"
  },
  {
    "word": "short",
    "meaning": "短い"
  },
  {
    "word": "useful",
    "meaning": "役に立つ"
  },
  {
    "word": "afraid",
    "meaning": "恐れて"
  },
  {
    "word": "favorite",
    "meaning": "お気に入りの"
  },
  {
    "word": "expensive",
    "meaning": "高価な"
  },
  {
    "word": "carry",
    "meaning": "運ぶ"
  },
  {
    "word": "break",
    "meaning": "壊れる，割れる"
  },
  {
    "word": "arrive",
    "meaning": "到着する"
  },
  {
    "word": "fall",
    "meaning": "落ちる"
  },
  {
    "word": "miss",
    "meaning": "がいなくてさみしく思う"
  },
  {
    "word": "cover",
    "meaning": "覆う"
  },
  {
    "word": "catch",
    "meaning": "捕まえる"
  },
  {
    "word": "save",
    "meaning": "救う"
  },
  {
    "word": "check",
    "meaning": "点検する"
  },
  {
    "word": "introduce",
    "meaning": "紹介する"
  },
  {
    "word": "join",
    "meaning": "加わる"
  },
  {
    "word": "clean",
    "meaning": "きれいにする"
  },
  {
    "word": "answer",
    "meaning": "答える"
  },
  {
    "word": "throw",
    "meaning": "投げる"
  },
  {
    "word": "invite",
    "meaning": "招待する"
  },
  {
    "word": "pick",
    "meaning": "摘み取る"
  },
  {
    "word": "die",
    "meaning": "死ぬ"
  },
  {
    "word": "return",
    "meaning": "戻る"
  },
  {
    "word": "fly",
    "meaning": "飛ぶ"
  },
  {
    "word": "cut",
    "meaning": "切る"
  },
  {
    "word": "hit",
    "meaning": "襲う，打つ"
  },
  {
    "word": "excuse",
    "meaning": "許す"
  },
  {
    "word": "wash",
    "meaning": "洗う"
  },
  {
    "word": "cry",
    "meaning": "叫ぶ"
  },
  {
    "word": "borrow",
    "meaning": "借りる"
  },
  {
    "word": "kill",
    "meaning": "殺す"
  },
  {
    "word": "push",
    "meaning": "押す"
  },
  {
    "word": "climb",
    "meaning": "登る"
  },
  {
    "word": "laugh",
    "meaning": "笑う"
  },
  {
    "word": "smile",
    "meaning": "ほほえむ"
  },
  {
    "word": "hurry",
    "meaning": "急ぐ"
  },
  {
    "word": "cheer",
    "meaning": "元気づける"
  },
  {
    "word": "volunteer",
    "meaning": "ボランティア"
  },
  {
    "word": "side",
    "meaning": "側"
  },
  {
    "word": "front",
    "meaning": "前，正面"
  },
  {
    "word": "concert",
    "meaning": "コンサート"
  },
  {
    "word": "fire",
    "meaning": "火事"
  },
  {
    "word": "village",
    "meaning": "村"
  },
  {
    "word": "lesson",
    "meaning": "レッスン"
  },
  {
    "word": "light",
    "meaning": "明かり"
  },
  {
    "word": "Internet",
    "meaning": "インターネット"
  },
  {
    "word": "weather",
    "meaning": "天気"
  },
  {
    "word": "voice",
    "meaning": "声"
  },
  {
    "word": "piece",
    "meaning": "１つ，１枚"
  },
  {
    "word": "goal",
    "meaning": "目標"
  },
  {
    "word": "speech",
    "meaning": "スピーチ"
  },
  {
    "word": "fan",
    "meaning": "ファン"
  },
  {
    "word": "dream",
    "meaning": "夢"
  },
  {
    "word": "mistake",
    "meaning": "間違い"
  },
  {
    "word": "meter",
    "meaning": "メートル"
  },
  {
    "word": "land",
    "meaning": "土地"
  },
  {
    "word": "hundred",
    "meaning": "百"
  },
  {
    "word": "thousand",
    "meaning": "千"
  },
  {
    "word": "million",
    "meaning": "百万"
  },
  {
    "word": "medicine",
    "meaning": "薬"
  },
  {
    "word": "uniform",
    "meaning": "制服"
  },
  {
    "word": "heat",
    "meaning": "暑さ"
  },
  {
    "word": "evening",
    "meaning": "夕方"
  },
  {
    "word": "noon",
    "meaning": "正午"
  },
  {
    "word": "holiday",
    "meaning": "休日，祝日"
  },
  {
    "word": "course",
    "meaning": "講座"
  },
  {
    "word": "rule",
    "meaning": "ルール"
  },
  {
    "word": "forest",
    "meaning": "森林"
  },
  {
    "word": "farm",
    "meaning": "農場"
  },
  {
    "word": "treasure",
    "meaning": "大切な物"
  },
  {
    "word": "hole",
    "meaning": "穴"
  },
  {
    "word": "cloud",
    "meaning": "雲"
  },
  {
    "word": "phone",
    "meaning": "電話"
  },
  {
    "word": "sorry",
    "meaning": "すまなく思って"
  },
  {
    "word": "careful",
    "meaning": "注意深い"
  },
  {
    "word": "wonderful",
    "meaning": "すばらしい (w-)"
  },
  {
    "word": "heavy",
    "meaning": "重い"
  },
  {
    "word": "sick",
    "meaning": "病気の"
  },
  {
    "word": "dear",
    "meaning": "親愛なる"
  },
  {
    "word": "glad",
    "meaning": "うれしい"
  },
  {
    "word": "dark",
    "meaning": "暗い"
  },
  {
    "word": "sad",
    "meaning": "悲しい"
  },
  {
    "word": "cute",
    "meaning": "かわいい"
  },
  {
    "word": "free",
    "meaning": "暇な"
  },
  {
    "word": "foreign",
    "meaning": "外国の"
  },
  {
    "word": "low",
    "meaning": "低い"
  },
  {
    "word": "safe",
    "meaning": "安全な"
  },
  {
    "word": "angry",
    "meaning": "怒った"
  },
  {
    "word": "lucky",
    "meaning": "幸運な"
  },
  {
    "word": "bright",
    "meaning": "輝いて"
  },
  {
    "word": "soft",
    "meaning": "柔らかい"
  },
  {
    "word": "loud",
    "meaning": "（音が）大きい"
  },
  {
    "word": "even",
    "meaning": "〜でさえ"
  },
  {
    "word": "back",
    "meaning": "戻って"
  },
  {
    "word": "still",
    "meaning": "まだ，なお"
  },
  {
    "word": "early",
    "meaning": "早く"
  },
  {
    "word": "soon",
    "meaning": "すぐに，まもなく"
  },
  {
    "word": "away",
    "meaning": "離れて"
  },
  {
    "word": "almost",
    "meaning": "ほとんど，ほぼ"
  },
  {
    "word": "together",
    "meaning": "一緒に"
  },
  {
    "word": "maybe",
    "meaning": "もしかすると"
  },
  {
    "word": "once",
    "meaning": "１度"
  },
  {
    "word": "else",
    "meaning": "ほかに"
  },
  {
    "word": "ago",
    "meaning": "〜前に"
  },
  {
    "word": "straight",
    "meaning": "まっすぐに"
  },
  {
    "word": "slowly",
    "meaning": "ゆっくりと"
  },
  {
    "word": "suddenly",
    "meaning": "突然，急に"
  },
  {
    "word": "until",
    "meaning": "…するまで"
  },
  {
    "word": "since",
    "meaning": "…したときから"
  },
  {
    "word": "around",
    "meaning": "〜のあちこちを"
  },
  {
    "word": "over",
    "meaning": "〜を超えて"
  },
  {
    "word": "without",
    "meaning": "〜なしに"
  },
  {
    "word": "through",
    "meaning": "〜の間じゅう"
  },
  {
    "word": "between",
    "meaning": "〜の間に (b-)"
  },
  {
    "word": "during",
    "meaning": "〜の間に (d-)"
  },
  {
    "word": "behind",
    "meaning": "〜の後ろに"
  },
  {
    "word": "along",
    "meaning": "〜に沿って"
  },
  {
    "word": "come from",
    "meaning": "〜から来ている"
  },
  {
    "word": "come true",
    "meaning": "実現する"
  },
  {
    "word": "cut off",
    "meaning": "〜を切り取る"
  },
  {
    "word": "do one’s best",
    "meaning": "全力を尽くす"
  },
  {
    "word": "get off",
    "meaning": "〜を降りる"
  },
  {
    "word": "get on",
    "meaning": "〜に乗る"
  },
  {
    "word": "get to",
    "meaning": "〜に到着する"
  },
  {
    "word": "go through",
    "meaning": "〜を経験する"
  },
  {
    "word": "grow up",
    "meaning": "成長する，大人になる"
  },
  {
    "word": "hear of",
    "meaning": "〜のことを聞く"
  },
  {
    "word": "help oneself to",
    "meaning": "〜を自由にとって食べる［飲む］"
  },
  {
    "word": "look for",
    "meaning": "〜を探す"
  },
  {
    "word": "look forward to",
    "meaning": "〜を楽しみに待つ"
  },
  {
    "word": "look like",
    "meaning": "〜に似ている"
  },
  {
    "word": "pick up",
    "meaning": "〜を拾い上げる"
  },
  {
    "word": "speak to / speak with",
    "meaning": "〜と話す"
  },
  {
    "word": "take care of",
    "meaning": "〜の世話をする"
  },
  {
    "word": "take off",
    "meaning": "〜を脱ぐ"
  },
  {
    "word": "take part in",
    "meaning": "〜に参加する"
  },
  {
    "word": "think of",
    "meaning": "〜を思いつく"
  },
  {
    "word": "after school",
    "meaning": "放課後に"
  },
  {
    "word": "all over",
    "meaning": "〜の至る所に"
  },
  {
    "word": "all the time",
    "meaning": "いつも"
  },
  {
    "word": "at first",
    "meaning": "最初は，初めのうちは"
  },
  {
    "word": "at home",
    "meaning": "在宅して"
  },
  {
    "word": "at last",
    "meaning": "ついに，やっと"
  },
  {
    "word": "at that time",
    "meaning": "その時に，当時"
  },
  {
    "word": "at the same time",
    "meaning": "同時に"
  },
  {
    "word": "for a long time",
    "meaning": "長い間"
  },
  {
    "word": "for the first time",
    "meaning": "初めて"
  },
  {
    "word": "in the end",
    "meaning": "結局"
  },
  {
    "word": "in the future",
    "meaning": "将来"
  },
  {
    "word": "in this way",
    "meaning": "このようにして"
  },
  {
    "word": "more than",
    "meaning": "〜より多い"
  },
  {
    "word": "of course",
    "meaning": "もちろん"
  },
  {
    "word": "on one’s way to",
    "meaning": "〜に行く途中で"
  },
  {
    "word": "over there",
    "meaning": "あそこに，あそこで"
  },
  {
    "word": "these days",
    "meaning": "近ごろ"
  },
  {
    "word": "a kind of",
    "meaning": "一種の"
  },
  {
    "word": "a lot of / lots of",
    "meaning": "たくさんの"
  },
  {
    "word": "A such as B",
    "meaning": "BのようなA"
  },
  {
    "word": "and so on",
    "meaning": "など"
  },
  {
    "word": "here is [are]",
    "meaning": "これが〜です"
  },
  {
    "word": "How about ~ ?",
    "meaning": "〜（して）はいかがですか？"
  },
  {
    "word": "no longer",
    "meaning": "もはや〜ない"
  },
  {
    "word": "not only A but (also) B",
    "meaning": "AだけでなくBも"
  },
  {
    "word": "so ~ that …",
    "meaning": "とても〜なので…"
  },
  {
    "word": "too ~ to",
    "meaning": "あまりに〜なので…できない"
  },
  {
    "word": "used to",
    "meaning": "以前はよく…した"
  },
  {
    "word": "would like to",
    "meaning": "…したいと思う"
  },
  {
    "word": "create",
    "meaning": "創造する"
  },
  {
    "word": "base",
    "meaning": "基礎を置く"
  },
  {
    "word": "repair",
    "meaning": "修理する，修復する"
  },
  {
    "word": "fail",
    "meaning": "失敗する"
  },
  {
    "word": "accept",
    "meaning": "受け入れる"
  },
  {
    "word": "belong",
    "meaning": "属する"
  },
  {
    "word": "exchange",
    "meaning": "交換する"
  },
  {
    "word": "complete",
    "meaning": "完成させる"
  },
  {
    "word": "treat",
    "meaning": "扱う"
  },
  {
    "word": "cross",
    "meaning": "横切る"
  },
  {
    "word": "hide",
    "meaning": "隠す"
  },
  {
    "word": "shake",
    "meaning": "振る"
  },
  {
    "word": "challenge",
    "meaning": "挑戦する"
  },
  {
    "word": "connect",
    "meaning": "つなぐ"
  },
  {
    "word": "reply",
    "meaning": "返事をする"
  },
  {
    "word": "beat",
    "meaning": "打ち負かす"
  },
  {
    "word": "share",
    "meaning": "分かち合う"
  },
  {
    "word": "observe",
    "meaning": "観察する"
  },
  {
    "word": "mark",
    "meaning": "しるしをつける"
  },
  {
    "word": "burn",
    "meaning": "焦がす，焦げる"
  },
  {
    "word": "locate",
    "meaning": "位置している"
  },
  {
    "word": "fix",
    "meaning": "修理する，固定する"
  },
  {
    "word": "suit",
    "meaning": "に最適である"
  },
  {
    "word": "destroy",
    "meaning": "破壊する"
  },
  {
    "word": "control",
    "meaning": "抑制する，制御する"
  },
  {
    "word": "respond",
    "meaning": "返答する"
  },
  {
    "word": "depend",
    "meaning": "当てにする"
  },
  {
    "word": "forgive",
    "meaning": "許す"
  },
  {
    "word": "attack",
    "meaning": "襲う"
  },
  {
    "word": "sink",
    "meaning": "沈む"
  },
  {
    "word": "appreciate",
    "meaning": "感謝する"
  },
  {
    "word": "feed",
    "meaning": "に食べ物を与える"
  },
  {
    "word": "success",
    "meaning": "成功"
  },
  {
    "word": "mystery",
    "meaning": "謎，未知のこと"
  },
  {
    "word": "ceremony",
    "meaning": "式典，儀式"
  },
  {
    "word": "schedule",
    "meaning": "予定，予定表"
  },
  {
    "word": "damage",
    "meaning": "損害，悪影響"
  },
  {
    "word": "model",
    "meaning": "型，模型"
  },
  {
    "word": "search",
    "meaning": "捜索"
  },
  {
    "word": "project",
    "meaning": "計画，事業"
  },
  {
    "word": "form",
    "meaning": "形態"
  },
  {
    "word": "scene",
    "meaning": "場面"
  },
  {
    "word": "accident",
    "meaning": "事故"
  },
  {
    "word": "contact",
    "meaning": "連絡"
  },
  {
    "word": "image",
    "meaning": "イメージ"
  },
  {
    "word": "trust",
    "meaning": "信頼，信用"
  },
  {
    "word": "quality",
    "meaning": "質，品質"
  },
  {
    "word": "action",
    "meaning": "行動"
  },
  {
    "word": "lack",
    "meaning": "不足，ないこと"
  },
  {
    "word": "spot",
    "meaning": "場所"
  },
  {
    "word": "truth",
    "meaning": "真実，本当のこと"
  },
  {
    "word": "effort",
    "meaning": "努力"
  },
  {
    "word": "type",
    "meaning": "型，タイプ"
  },
  {
    "word": "site",
    "meaning": "敷地，土地"
  },
  {
    "word": "tool",
    "meaning": "手段，道具"
  },
  {
    "word": "couple",
    "meaning": "２つ，２人"
  },
  {
    "word": "hero",
    "meaning": "ヒーロー，英雄"
  },
  {
    "word": "courage",
    "meaning": "勇気"
  },
  {
    "word": "board",
    "meaning": "板，掲示板"
  },
  {
    "word": "purpose",
    "meaning": "目的，意図"
  },
  {
    "word": "waste",
    "meaning": "無駄，浪費"
  },
  {
    "word": "shape",
    "meaning": "形"
  },
  {
    "word": "technique",
    "meaning": "技能，技術"
  },
  {
    "word": "middle",
    "meaning": "真ん中，中央"
  },
  {
    "word": "spirit",
    "meaning": "精神，心"
  },
  {
    "word": "partner",
    "meaning": "パートナー"
  },
  {
    "word": "population",
    "meaning": "人口"
  },
  {
    "word": "fever",
    "meaning": "熱，発熱"
  },
  {
    "word": "method",
    "meaning": "方法"
  },
  {
    "word": "structure",
    "meaning": "構造"
  },
  {
    "word": "background",
    "meaning": "経歴，生い立ち"
  },
  {
    "word": "combination",
    "meaning": "組み合わせ"
  },
  {
    "word": "official",
    "meaning": "公式の"
  },
  {
    "word": "flat",
    "meaning": "平らな"
  },
  {
    "word": "serious",
    "meaning": "深刻な"
  },
  {
    "word": "ordinary",
    "meaning": "普通の"
  },
  {
    "word": "private",
    "meaning": "私的な，個人的な"
  },
  {
    "word": "major",
    "meaning": "重大な"
  },
  {
    "word": "classical",
    "meaning": "クラシックの"
  },
  {
    "word": "honest",
    "meaning": "正直な"
  },
  {
    "word": "excellent",
    "meaning": "とても優れた"
  },
  {
    "word": "whole",
    "meaning": "全体の"
  },
  {
    "word": "central",
    "meaning": "中心の"
  },
  {
    "word": "ancient",
    "meaning": "古代の"
  },
  {
    "word": "fantastic",
    "meaning": "とてもすばらしい"
  },
  {
    "word": "regular",
    "meaning": "定期的な"
  },
  {
    "word": "basic",
    "meaning": "基本的な，初歩的な"
  },
  {
    "word": "huge",
    "meaning": "巨大な"
  },
  {
    "word": "empty",
    "meaning": "空の，空いている"
  },
  {
    "word": "smart",
    "meaning": "頭のよい，賢い"
  },
  {
    "word": "general",
    "meaning": "大まかな，一般的な"
  },
  {
    "word": "single",
    "meaning": "たった１つの"
  },
  {
    "word": "responsible",
    "meaning": "責任のある"
  },
  {
    "word": "fresh",
    "meaning": "新鮮な"
  },
  {
    "word": "familiar",
    "meaning": "熟知している"
  },
  {
    "word": "native",
    "meaning": "出生地の，母国の"
  },
  {
    "word": "instant",
    "meaning": "即席の"
  },
  {
    "word": "lovely",
    "meaning": "すてきな"
  },
  {
    "word": "clear",
    "meaning": "明白な"
  },
  {
    "word": "convenient",
    "meaning": "都合のよい，便利な"
  },
  {
    "word": "crazy",
    "meaning": "夢中で，頭の狂った"
  },
  {
    "word": "funny",
    "meaning": "おかしい"
  },
  {
    "word": "secret",
    "meaning": "秘密の"
  },
  {
    "word": "remote",
    "meaning": "（遠く）離れた"
  },
  {
    "word": "wake",
    "meaning": "目を覚ます"
  },
  {
    "word": "release",
    "meaning": "解放する"
  },
  {
    "word": "establish",
    "meaning": "設立する"
  },
  {
    "word": "examine",
    "meaning": "調べる"
  },
  {
    "word": "celebrate",
    "meaning": "祝う"
  },
  {
    "word": "float",
    "meaning": "漂う，浮く"
  },
  {
    "word": "recommend",
    "meaning": "推薦する"
  },
  {
    "word": "supply",
    "meaning": "供給する"
  },
  {
    "word": "disappear",
    "meaning": "見えなくなる"
  },
  {
    "word": "apologize",
    "meaning": "謝る"
  },
  {
    "word": "paint",
    "meaning": "塗る"
  },
  {
    "word": "pull",
    "meaning": "引く，引っ張る"
  },
  {
    "word": "print",
    "meaning": "印刷する"
  },
  {
    "word": "lift",
    "meaning": "持ち上げる"
  },
  {
    "word": "separate",
    "meaning": "分ける"
  },
  {
    "word": "melt",
    "meaning": "溶かす，溶ける"
  },
  {
    "word": "strike",
    "meaning": "強く打つ"
  },
  {
    "word": "blow",
    "meaning": "吹き飛ばす"
  },
  {
    "word": "let",
    "meaning": "させてやる"
  },
  {
    "word": "roll",
    "meaning": "転がる，転がす"
  },
  {
    "word": "recover",
    "meaning": "回復する"
  },
  {
    "word": "surround",
    "meaning": "囲む，取り囲む"
  },
  {
    "word": "doubt",
    "meaning": "疑う"
  },
  {
    "word": "display",
    "meaning": "展示する，陳列する"
  },
  {
    "word": "announce",
    "meaning": "発表する"
  },
  {
    "word": "support",
    "meaning": "支持する"
  },
  {
    "word": "act",
    "meaning": "行動する"
  },
  {
    "word": "repeat",
    "meaning": "繰り返す"
  },
  {
    "word": "count",
    "meaning": "数える"
  },
  {
    "word": "compare",
    "meaning": "比べる"
  },
  {
    "word": "shine",
    "meaning": "輝く"
  },
  {
    "word": "replace",
    "meaning": "に取って代わる"
  },
  {
    "word": "reality",
    "meaning": "現実"
  },
  {
    "word": "strength",
    "meaning": "力，強さ"
  },
  {
    "word": "era",
    "meaning": "時代"
  },
  {
    "word": "area",
    "meaning": "地域，区域"
  },
  {
    "word": "respect",
    "meaning": "尊敬"
  },
  {
    "word": "pressure",
    "meaning": "重圧"
  },
  {
    "word": "pleasure",
    "meaning": "喜び，楽しみ"
  },
  {
    "word": "favor",
    "meaning": "親切な行為"
  },
  {
    "word": "statue",
    "meaning": "像"
  },
  {
    "word": "limit",
    "meaning": "限度，限界"
  },
  {
    "word": "bottom",
    "meaning": "下部，底"
  },
  {
    "word": "position",
    "meaning": "立場"
  },
  {
    "word": "memory",
    "meaning": "記憶，記憶力"
  },
  {
    "word": "level",
    "meaning": "水準，レベル"
  },
  {
    "word": "figure",
    "meaning": "数，数値"
  },
  {
    "word": "direction",
    "meaning": "方向"
  },
  {
    "word": "bit",
    "meaning": "少し，少量"
  },
  {
    "word": "contrast",
    "meaning": "対比，差異"
  },
  {
    "word": "religion",
    "meaning": "宗教"
  },
  {
    "word": "harmony",
    "meaning": "調和，一致"
  },
  {
    "word": "pattern",
    "meaning": "模様，図柄"
  },
  {
    "word": "stage",
    "meaning": "段階"
  },
  {
    "word": "degree",
    "meaning": "程度"
  },
  {
    "word": "emergency",
    "meaning": "緊急"
  },
  {
    "word": "origin",
    "meaning": "起源"
  },
  {
    "word": "battle",
    "meaning": "戦闘"
  },
  {
    "word": "enemy",
    "meaning": "敵"
  },
  {
    "word": "note",
    "meaning": "メモ"
  },
  {
    "word": "countryside",
    "meaning": "田舎"
  },
  {
    "word": "contest",
    "meaning": "競技会，コンテスト"
  },
  {
    "word": "sort",
    "meaning": "種類"
  },
  {
    "word": "depth",
    "meaning": "深さ"
  },
  {
    "word": "top",
    "meaning": "最高部，頂上"
  },
  {
    "word": "theme",
    "meaning": "テーマ，主題"
  },
  {
    "word": "sentence",
    "meaning": "文"
  },
  {
    "word": "cycle",
    "meaning": "周期"
  },
  {
    "word": "concept",
    "meaning": "概念"
  },
  {
    "word": "rhythm",
    "meaning": "リズム"
  },
  {
    "word": "tradition",
    "meaning": "伝統"
  },
  {
    "word": "theory",
    "meaning": "理論，説"
  },
  {
    "word": "correct",
    "meaning": "正しい"
  },
  {
    "word": "blank",
    "meaning": "白紙の，空白の"
  },
  {
    "word": "quiet",
    "meaning": "静かな"
  },
  {
    "word": "smooth",
    "meaning": "滑らかな，すべすべした"
  },
  {
    "word": "wet",
    "meaning": "濡れた，湿った"
  },
  {
    "word": "chief",
    "meaning": "最高の，最高位の"
  },
  {
    "word": "raw",
    "meaning": "生の"
  },
  {
    "word": "personal",
    "meaning": "個人の，個人的な"
  },
  {
    "word": "double",
    "meaning": "２倍の"
  },
  {
    "word": "dirty",
    "meaning": "汚れた"
  },
  {
    "word": "normal",
    "meaning": "普通の"
  },
  {
    "word": "full",
    "meaning": "いっぱいの"
  },
  {
    "word": "simple",
    "meaning": "簡単な"
  },
  {
    "word": "equal",
    "meaning": "等しい，同等の"
  },
  {
    "word": "quick",
    "meaning": "短時間の，すばやい"
  },
  {
    "word": "rapid",
    "meaning": "急速な，急激な"
  },
  {
    "word": "ideal",
    "meaning": "理想的な"
  },
  {
    "word": "rough",
    "meaning": "大まかな，粗い"
  },
  {
    "word": "silent",
    "meaning": "無言の，静かな"
  },
  {
    "word": "violent",
    "meaning": "暴力的な"
  },
  {
    "word": "rich",
    "meaning": "豊富の，金持ちの"
  },
  {
    "word": "perfect",
    "meaning": "完全な，完璧な"
  },
  {
    "word": "weak",
    "meaning": "弱い，弱った"
  },
  {
    "word": "upper",
    "meaning": "上の方の，高い方の"
  },
  {
    "word": "inner",
    "meaning": "内部の，中心部の"
  },
  {
    "word": "awful",
    "meaning": "ひどい"
  },
  {
    "word": "false",
    "meaning": "間違った"
  },
  {
    "word": "vivid",
    "meaning": "鮮やかな"
  },
  {
    "word": "pure",
    "meaning": "純粋な"
  },
  {
    "word": "minor",
    "meaning": "重要でない，小さい方の"
  },
  {
    "word": "mild",
    "meaning": "（天候が）穏やかな"
  },
  {
    "word": "admire",
    "meaning": "賞賛する，感嘆する"
  },
  {
    "word": "drop",
    "meaning": "落とす"
  },
  {
    "word": "reflect",
    "meaning": "映し出す，反射する"
  },
  {
    "word": "dig",
    "meaning": "掘る"
  },
  {
    "word": "beg",
    "meaning": "懇願する"
  },
  {
    "word": "freeze",
    "meaning": "凍る"
  },
  {
    "word": "adopt",
    "meaning": "採用する"
  },
  {
    "word": "measure",
    "meaning": "測る"
  },
  {
    "word": "flow",
    "meaning": "流れる"
  },
  {
    "word": "fulfill",
    "meaning": "実現させる"
  },
  {
    "word": "deliver",
    "meaning": "配達する"
  },
  {
    "word": "wrap",
    "meaning": "包む"
  },
  {
    "word": "knock",
    "meaning": "ノックする"
  },
  {
    "word": "spell",
    "meaning": "つづる"
  },
  {
    "word": "rush",
    "meaning": "急いで行く"
  },
  {
    "word": "pray",
    "meaning": "祈る"
  },
  {
    "word": "reject",
    "meaning": "拒絶する"
  },
  {
    "word": "protest",
    "meaning": "抗議する"
  },
  {
    "word": "handle",
    "meaning": "扱う，処理する"
  },
  {
    "word": "disturb",
    "meaning": "邪魔する"
  },
  {
    "word": "gather",
    "meaning": "集める"
  },
  {
    "word": "copy",
    "meaning": "写しをとる"
  },
  {
    "word": "press",
    "meaning": "押す"
  },
  {
    "word": "consist",
    "meaning": "成り立つ"
  },
  {
    "word": "assist",
    "meaning": "手助けする"
  },
  {
    "word": "kick",
    "meaning": "蹴る"
  },
  {
    "word": "link",
    "meaning": "結びつける，関連づける"
  },
  {
    "word": "adjust",
    "meaning": "順応する，適応する"
  },
  {
    "word": "defend",
    "meaning": "守る"
  },
  {
    "word": "shut",
    "meaning": "閉める，閉じる"
  },
  {
    "word": "bear",
    "meaning": "耐える"
  },
  {
    "word": "task",
    "meaning": "仕事"
  },
  {
    "word": "hug",
    "meaning": "抱擁，ハグ"
  },
  {
    "word": "clue",
    "meaning": "手がかり"
  },
  {
    "word": "percent",
    "meaning": "パーセント"
  },
  {
    "word": "dozen",
    "meaning": "１ダース"
  },
  {
    "word": "ghost",
    "meaning": "幽霊"
  },
  {
    "word": "error",
    "meaning": "誤り"
  },
  {
    "word": "trend",
    "meaning": "流行，トレンド"
  },
  {
    "word": "thought",
    "meaning": "考え"
  },
  {
    "word": "alarm",
    "meaning": "警報"
  },
  {
    "word": "sample",
    "meaning": "見本，試供品"
  },
  {
    "word": "shadow",
    "meaning": "影，陰"
  },
  {
    "word": "shade",
    "meaning": "陰，日陰"
  },
  {
    "word": "standard",
    "meaning": "基準，標準"
  },
  {
    "word": "hunger",
    "meaning": "飢え，空腹"
  },
  {
    "word": "appeal",
    "meaning": "訴え，要求"
  },
  {
    "word": "harm",
    "meaning": "害，危害"
  },
  {
    "word": "pile",
    "meaning": "積み重ね"
  },
  {
    "word": "plenty",
    "meaning": "たくさん"
  },
  {
    "word": "edge",
    "meaning": "端，縁"
  },
  {
    "word": "poison",
    "meaning": "毒"
  },
  {
    "word": "scale",
    "meaning": "規模，目盛り"
  },
  {
    "word": "section",
    "meaning": "節，区分"
  },
  {
    "word": "attempt",
    "meaning": "試み"
  },
  {
    "word": "merit",
    "meaning": "長所，利点"
  },
  {
    "word": "trick",
    "meaning": "いたずら"
  },
  {
    "word": "second",
    "meaning": "少しの間，秒"
  },
  {
    "word": "medium",
    "meaning": "媒体，手段"
  },
  {
    "word": "unit",
    "meaning": "単位"
  },
  {
    "word": "ambition",
    "meaning": "願望，野心"
  },
  {
    "word": "midnight",
    "meaning": "夜の１２時"
  },
  {
    "word": "power",
    "meaning": "力"
  },
  {
    "word": "principle",
    "meaning": "信条"
  },
  {
    "word": "vision",
    "meaning": "展望"
  },
  {
    "word": "quarter",
    "meaning": "4分の1"
  },
  {
    "word": "luck",
    "meaning": "運，幸運"
  },
  {
    "word": "quantity",
    "meaning": "分量，数量"
  },
  {
    "word": "fault",
    "meaning": "責任，罪"
  },
  {
    "word": "somehow",
    "meaning": "何とかして"
  },
  {
    "word": "forever",
    "meaning": "永遠に"
  },
  {
    "word": "mostly",
    "meaning": "主に，たいてい"
  },
  {
    "word": "forward",
    "meaning": "前へ，先に"
  },
  {
    "word": "nowadays",
    "meaning": "近ごろ，最近では"
  },
  {
    "word": "ahead",
    "meaning": "前方に"
  },
  {
    "word": "apart",
    "meaning": "離れて"
  },
  {
    "word": "altogether",
    "meaning": "まったく，完全に"
  },
  {
    "word": "throughout",
    "meaning": "〜の間じゅう"
  },
  {
    "word": "beyond",
    "meaning": "〜の向こうに"
  },
  {
    "word": "toward",
    "meaning": "〜の方向へ"
  },
  {
    "word": "within",
    "meaning": "〜以内に"
  },
  {
    "word": "above",
    "meaning": "〜の上方に"
  },
  {
    "word": "below",
    "meaning": "〜より下に"
  },
  {
    "word": "per",
    "meaning": "〜につき"
  },
  {
    "word": "except",
    "meaning": "〜を除いて"
  },
  {
    "word": "beside",
    "meaning": "〜のそばに"
  },
  {
    "word": "unlike",
    "meaning": "〜と違って"
  },
  {
    "word": "outside",
    "meaning": "〜の外に"
  },
  {
    "word": "inside",
    "meaning": "〜の中に"
  },
  {
    "word": "against",
    "meaning": "〜に反対して"
  },
  {
    "word": "beneath",
    "meaning": "〜の下に"
  },
  {
    "word": "plus",
    "meaning": "〜を加えて"
  },
  {
    "word": "across",
    "meaning": "〜を横切って"
  },
  {
    "word": "bring back",
    "meaning": "〜を返す"
  },
  {
    "word": "carry out",
    "meaning": "〜を実行する"
  },
  {
    "word": "date back to",
    "meaning": "〜にさかのぼる"
  },
  {
    "word": "find out",
    "meaning": "知る"
  },
  {
    "word": "get together",
    "meaning": "集まる"
  },
  {
    "word": "give off",
    "meaning": "〜を発する"
  },
  {
    "word": "hand in",
    "meaning": "〜を提出する"
  },
  {
    "word": "hang up",
    "meaning": "電話を切る"
  },
  {
    "word": "hold up",
    "meaning": "〜を支えている"
  },
  {
    "word": "live on",
    "meaning": "〜で暮らしを立てる"
  },
  {
    "word": "look after",
    "meaning": "〜の世話をする"
  },
  {
    "word": "look out",
    "meaning": "注意する"
  },
  {
    "word": "look up",
    "meaning": "〜を調べる"
  },
  {
    "word": "major in",
    "meaning": "〜を専攻する"
  },
  {
    "word": "name after",
    "meaning": "〜にちなんで名付ける"
  },
  {
    "word": "put down",
    "meaning": "〜を書き留める"
  },
  {
    "word": "see off",
    "meaning": "〜を見送る"
  },
  {
    "word": "take a look",
    "meaning": "ちょっと見る"
  },
  {
    "word": "take away",
    "meaning": "〜を片付ける"
  },
  {
    "word": "take one’s time",
    "meaning": "…するのに時間をかける"
  },
  {
    "word": "think of A as B",
    "meaning": "AをBと見なす"
  },
  {
    "word": "be about to",
    "meaning": "…しようとしている"
  },
  {
    "word": "be born into",
    "meaning": "〜の家庭に生まれる"
  },
  {
    "word": "be faced with",
    "meaning": "〜に直面している"
  },
  {
    "word": "be good at",
    "meaning": "〜が上手だ"
  },
  {
    "word": "be in need of",
    "meaning": "〜を必要としている"
  },
  {
    "word": "be made of [from]",
    "meaning": "〜でできている"
  },
  {
    "word": "be short of",
    "meaning": "〜が足りない"
  },
  {
    "word": "be up to",
    "meaning": "〜次第である"
  },
  {
    "word": "be worried about",
    "meaning": "〜のことを心配している"
  },
  {
    "word": "by oneself",
    "meaning": "ひとりで，独力で"
  },
  {
    "word": "on one’s own",
    "meaning": "たったひとりで"
  },
  {
    "word": "above all",
    "meaning": "とりわけ"
  },
  {
    "word": "across from",
    "meaning": "〜の向かい側に"
  },
  {
    "word": "after all",
    "meaning": "結局は，やはり"
  },
  {
    "word": "at a time",
    "meaning": "１度に"
  },
  {
    "word": "by accident",
    "meaning": "偶然"
  },
  {
    "word": "by mistake",
    "meaning": "間違って"
  },
  {
    "word": "day after day",
    "meaning": "来る日も来る日も"
  },
  {
    "word": "for free",
    "meaning": "無料で"
  },
  {
    "word": "from on",
    "meaning": "〜以降"
  },
  {
    "word": "from time to time",
    "meaning": "時々"
  },
  {
    "word": "in a hurry",
    "meaning": "急いで"
  },
  {
    "word": "in favor of",
    "meaning": "〜に賛成して"
  },
  {
    "word": "in order to",
    "meaning": "…するために"
  },
  {
    "word": "in the past",
    "meaning": "昔は，過去に"
  },
  {
    "word": "in those days",
    "meaning": "その当時は"
  },
  {
    "word": "on purpose",
    "meaning": "故意に，わざと"
  },
  {
    "word": "over and over",
    "meaning": "何度も"
  },
  {
    "word": "upside down",
    "meaning": "逆さまに"
  },
  {
    "word": "a large number of",
    "meaning": "たくさんの"
  },
  {
    "word": "a series of",
    "meaning": "一連の，一続きの"
  },
  {
    "word": "as long as",
    "meaning": "…である限り"
  },
  {
    "word": "as soon as",
    "meaning": "…するとすぐに"
  },
  {
    "word": "had better",
    "meaning": "…するべきだ"
  },
  {
    "word": "more and more",
    "meaning": "ますます多くの"
  },
  {
    "word": "not at all",
    "meaning": "まったく〜ではない"
  },
  {
    "word": "not A but B",
    "meaning": "AではなくてB"
  },
  {
    "word": "the first time",
    "meaning": "初めて…したとき"
  },
  {
    "word": "when it comes to",
    "meaning": "〜のこととなると"
  },
  {
    "word": "parent",
    "meaning": "親"
  },
  {
    "word": "husband",
    "meaning": "夫"
  },
  {
    "word": "wife",
    "meaning": "妻"
  },
  {
    "word": "kid",
    "meaning": "子供"
  },
  {
    "word": "twin",
    "meaning": "双子（の１人）"
  },
  {
    "word": "relative",
    "meaning": "親戚"
  },
  {
    "word": "cousin",
    "meaning": "いとこ"
  },
  {
    "word": "ancestor",
    "meaning": "先祖"
  },
  {
    "word": "job",
    "meaning": "仕事"
  },
  {
    "word": "work",
    "meaning": "仕事"
  },
  {
    "word": "occupation",
    "meaning": "職業"
  },
  {
    "word": "career",
    "meaning": "職業"
  },
  {
    "word": "businesss",
    "meaning": "仕事，商売"
  },
  {
    "word": "interview",
    "meaning": "面接"
  },
  {
    "word": "hire",
    "meaning": "雇う"
  },
  {
    "word": "retire",
    "meaning": "退職する，引退する"
  },
  {
    "word": "clerk",
    "meaning": "店員"
  },
  {
    "word": "officer",
    "meaning": "警官"
  },
  {
    "word": "engineer",
    "meaning": "技師，技術者"
  },
  {
    "word": "artist",
    "meaning": "芸術家"
  },
  {
    "word": "director",
    "meaning": "監督"
  },
  {
    "word": "actor",
    "meaning": "俳優"
  },
  {
    "word": "nurse",
    "meaning": "看護師"
  },
  {
    "word": "secretary",
    "meaning": "秘書"
  },
  {
    "word": "agent",
    "meaning": "代行業者"
  },
  {
    "word": "civil",
    "meaning": "民間の"
  },
  {
    "word": "mayor",
    "meaning": "市長"
  },
  {
    "word": "chairperson",
    "meaning": "議長，委員長"
  },
  {
    "word": "professor",
    "meaning": "教授"
  },
  {
    "word": "principal",
    "meaning": "校長"
  },
  {
    "word": "expert",
    "meaning": "専門家"
  },
  {
    "word": "leader",
    "meaning": "指導者，リーダー"
  },
  {
    "word": "queen",
    "meaning": "女王"
  },
  {
    "word": "prince",
    "meaning": "王子"
  },
  {
    "word": "royal",
    "meaning": "国王の"
  },
  {
    "word": "slave",
    "meaning": "奴隷"
  },
  {
    "word": "hall",
    "meaning": "会館，ホール"
  },
  {
    "word": "office",
    "meaning": "事務所，会社"
  },
  {
    "word": "bank",
    "meaning": "銀行"
  },
  {
    "word": "apartment",
    "meaning": "アパート"
  },
  {
    "word": "library",
    "meaning": "図書館"
  },
  {
    "word": "gym",
    "meaning": "体育館，ジム"
  },
  {
    "word": "museum",
    "meaning": "博物館，美術館"
  },
  {
    "word": "theater",
    "meaning": "劇場"
  },
  {
    "word": "studio",
    "meaning": "スタジオ，（映画）撮影所"
  },
  {
    "word": "stadium",
    "meaning": "競技場，スタジアム"
  },
  {
    "word": "temple",
    "meaning": "寺院"
  },
  {
    "word": "shrine",
    "meaning": "聖堂，神社"
  },
  {
    "word": "castle",
    "meaning": "城"
  },
  {
    "word": "tower",
    "meaning": "塔"
  },
  {
    "word": "entrance",
    "meaning": "入口，玄関"
  },
  {
    "word": "exit",
    "meaning": "出口"
  },
  {
    "word": "architecture",
    "meaning": "建築"
  },
  {
    "word": "avenue",
    "meaning": "大通り，〜街"
  },
  {
    "word": "block",
    "meaning": "１区画，ブロック"
  },
  {
    "word": "corner",
    "meaning": "曲がり角"
  },
  {
    "word": "intersection",
    "meaning": "交差点"
  },
  {
    "word": "zone",
    "meaning": "地帯，区域"
  },
  {
    "word": "square",
    "meaning": "広場，正方形"
  },
  {
    "word": "market",
    "meaning": "市場"
  },
  {
    "word": "path",
    "meaning": "小道"
  },
  {
    "word": "slope",
    "meaning": "坂"
  },
  {
    "word": "traffic",
    "meaning": "交通，交通量"
  },
  {
    "word": "drive",
    "meaning": "（車を）運転する"
  },
  {
    "word": "ride",
    "meaning": "乗る"
  },
  {
    "word": "railroad",
    "meaning": "鉄道"
  },
  {
    "word": "subway",
    "meaning": "地下鉄"
  },
  {
    "word": "automobile",
    "meaning": "自動車"
  },
  {
    "word": "engine",
    "meaning": "エンジン"
  },
  {
    "word": "wheel",
    "meaning": "ハンドル"
  },
  {
    "word": "license",
    "meaning": "免許，免許証"
  },
  {
    "word": "airport",
    "meaning": "空港"
  },
  {
    "word": "flight",
    "meaning": "定期航空便，フライト"
  },
  {
    "word": "port",
    "meaning": "港"
  },
  {
    "word": "canal",
    "meaning": "運河"
  },
  {
    "word": "key",
    "meaning": "鍵"
  },
  {
    "word": "stair",
    "meaning": "階段"
  },
  {
    "word": "upstairs",
    "meaning": "上の階に［で］"
  },
  {
    "word": "floor",
    "meaning": "床"
  },
  {
    "word": "shelf",
    "meaning": "棚"
  },
  {
    "word": "roof",
    "meaning": "屋根"
  },
  {
    "word": "ladder",
    "meaning": "はしご"
  },
  {
    "word": "yard",
    "meaning": "庭"
  },
  {
    "word": "closet",
    "meaning": "クローゼット"
  },
  {
    "word": "refrigerator",
    "meaning": "冷蔵庫"
  },
  {
    "word": "shower",
    "meaning": "シャワー"
  },
  {
    "word": "housework",
    "meaning": "家事"
  },
  {
    "word": "plastic",
    "meaning": "プラスチックの"
  },
  {
    "word": "plate",
    "meaning": "皿"
  },
  {
    "word": "glass",
    "meaning": "グラス"
  },
  {
    "word": "garbage",
    "meaning": "生ゴミ，ごみ"
  },
  {
    "word": "trash",
    "meaning": "ごみ，紙くず"
  },
  {
    "word": "dust",
    "meaning": "ほこり"
  },
  {
    "word": "trap",
    "meaning": "わな"
  },
  {
    "word": "brush",
    "meaning": "ブラシ，はけ"
  },
  {
    "word": "comb",
    "meaning": "くし"
  },
  {
    "word": "blanket",
    "meaning": "毛布"
  },
  {
    "word": "sheet",
    "meaning": "紙，紙の１枚"
  },
  {
    "word": "label",
    "meaning": "ラベル"
  },
  {
    "word": "envelope",
    "meaning": "封筒"
  },
  {
    "word": "fashion",
    "meaning": "ファッション"
  },
  {
    "word": "style",
    "meaning": "スタイル"
  },
  {
    "word": "formal",
    "meaning": "正式の"
  },
  {
    "word": "tight",
    "meaning": "きつい"
  },
  {
    "word": "loose",
    "meaning": "ゆったりした"
  },
  {
    "word": "wear",
    "meaning": "着ている，身につけている"
  },
  {
    "word": "clothes",
    "meaning": "衣服，衣類"
  },
  {
    "word": "dress",
    "meaning": "衣服を着せる"
  },
  {
    "word": "costume",
    "meaning": "衣装，仮装"
  },
  {
    "word": "tie",
    "meaning": "結ぶ"
  },
  {
    "word": "sew",
    "meaning": "縫う，縫い付ける"
  },
  {
    "word": "frame",
    "meaning": "フレーム"
  },
  {
    "word": "button",
    "meaning": "ボタン"
  },
  {
    "word": "ring",
    "meaning": "指輪"
  },
  {
    "word": "jewel",
    "meaning": "宝石"
  },
  {
    "word": "wallet",
    "meaning": "財布"
  },
  {
    "word": "mobile",
    "meaning": "携帯電話"
  },
  {
    "word": "portable",
    "meaning": "持ち運びできる"
  },
  {
    "word": "umbrella",
    "meaning": "傘"
  },
  {
    "word": "silk",
    "meaning": "絹，絹糸"
  },
  {
    "word": "cotton",
    "meaning": "綿"
  },
  {
    "word": "leather",
    "meaning": "革"
  },
  {
    "word": "feather",
    "meaning": "羽，羽毛"
  },
  {
    "word": "meal",
    "meaning": "食事"
  },
  {
    "word": "supper",
    "meaning": "夕食"
  },
  {
    "word": "snack",
    "meaning": "軽食"
  },
  {
    "word": "dessert",
    "meaning": "デザート"
  },
  {
    "word": "diet",
    "meaning": "ダイエット"
  },
  {
    "word": "chopstick",
    "meaning": "箸"
  },
  {
    "word": "bite",
    "meaning": "噛む"
  },
  {
    "word": "flavor",
    "meaning": "風味，味"
  },
  {
    "word": "delicious",
    "meaning": "とてもおいしい"
  },
  {
    "word": "bitter",
    "meaning": "苦い"
  },
  {
    "word": "sour",
    "meaning": "酸っぱい"
  },
  {
    "word": "recipe",
    "meaning": "調理法，レシピ"
  },
  {
    "word": "mix",
    "meaning": "混ぜる"
  },
  {
    "word": "pour",
    "meaning": "注ぐ，かける"
  },
  {
    "word": "fry",
    "meaning": "炒める，揚げる"
  },
  {
    "word": "boil",
    "meaning": "ゆでる，煮る"
  },
  {
    "word": "steam",
    "meaning": "蒸す"
  },
  {
    "word": "bake",
    "meaning": "（パンなどを）焼く"
  },
  {
    "word": "harvest",
    "meaning": "収穫，収穫物"
  },
  {
    "word": "vegetable",
    "meaning": "野菜"
  },
  {
    "word": "meat",
    "meaning": "肉"
  },
  {
    "word": "wheat",
    "meaning": "小麦"
  },
  {
    "word": "flour",
    "meaning": "小麦粉"
  },
  {
    "word": "honey",
    "meaning": "ハチミツ"
  },
  {
    "word": "salt",
    "meaning": "塩"
  },
  {
    "word": "menu",
    "meaning": "メニュー"
  },
  {
    "word": "choice",
    "meaning": "選択"
  },
  {
    "word": "service",
    "meaning": "サービス，応対"
  },
  {
    "word": "tip",
    "meaning": "チップ"
  },
  {
    "word": "cancel",
    "meaning": "取り消す，中止する"
  },
  {
    "word": "culture",
    "meaning": "文化"
  },
  {
    "word": "hobby",
    "meaning": "趣味"
  },
  {
    "word": "amusement",
    "meaning": "楽しみ"
  },
  {
    "word": "entertainment",
    "meaning": "娯楽"
  },
  {
    "word": "collect",
    "meaning": "集める，収集する"
  },
  {
    "word": "exhibit",
    "meaning": "展示する"
  },
  {
    "word": "instrument",
    "meaning": "楽器"
  },
  {
    "word": "tune",
    "meaning": "（音楽の）調子"
  },
  {
    "word": "film",
    "meaning": "映画"
  },
  {
    "word": "cartoon",
    "meaning": "（子供向けの）アニメ"
  },
  {
    "word": "comic",
    "meaning": "漫画"
  },
  {
    "word": "photograph",
    "meaning": "写真"
  },
  {
    "word": "portrait",
    "meaning": "肖像画"
  },
  {
    "word": "magic",
    "meaning": "手品"
  },
  {
    "word": "tour",
    "meaning": "旅行，ツアー"
  },
  {
    "word": "journey",
    "meaning": "旅行"
  },
  {
    "word": "sightseeing",
    "meaning": "観光"
  },
  {
    "word": "adventure",
    "meaning": "冒険"
  },
  {
    "word": "explore",
    "meaning": "探検する"
  },
  {
    "word": "wander",
    "meaning": "歩き回る，ぶらつく"
  },
  {
    "word": "camp",
    "meaning": "キャンプ"
  },
  {
    "word": "tourist",
    "meaning": "観光客"
  },
  {
    "word": "passenger",
    "meaning": "乗客"
  },
  {
    "word": "guide",
    "meaning": "ガイド，案内人"
  },
  {
    "word": "vacation",
    "meaning": "休暇"
  },
  {
    "word": "souvenir",
    "meaning": "お土産"
  },
  {
    "word": "pack",
    "meaning": "荷物を詰める"
  },
  {
    "word": "win",
    "meaning": "勝つ"
  },
  {
    "word": "victory",
    "meaning": "勝利"
  },
  {
    "word": "record",
    "meaning": "記録"
  },
  {
    "word": "score",
    "meaning": "得点，スコア"
  },
  {
    "word": "prize",
    "meaning": "賞"
  },
  {
    "word": "award",
    "meaning": "賞，賞金"
  },
  {
    "word": "race",
    "meaning": "競争，人種"
  },
  {
    "word": "match",
    "meaning": "試合"
  },
  {
    "word": "tournament",
    "meaning": "トーナメント"
  },
  {
    "word": "professional",
    "meaning": "プロの"
  },
  {
    "word": "athlete",
    "meaning": "運動選手"
  },
  {
    "word": "coach",
    "meaning": "コーチ，指導員"
  },
  {
    "word": "rival",
    "meaning": "ライバル，競争相手"
  },
  {
    "word": "train",
    "meaning": "訓練する，トレーニングする"
  },
  {
    "word": "exercise",
    "meaning": "運動する"
  },
  {
    "word": "practice",
    "meaning": "練習する"
  },
  {
    "word": "indoor",
    "meaning": "屋内の，室内の"
  },
  {
    "word": "flag",
    "meaning": "旗，国旗"
  },
  {
    "word": "nature",
    "meaning": "自然"
  },
  {
    "word": "climate",
    "meaning": "気候"
  },
  {
    "word": "forecast",
    "meaning": "予報，予測"
  },
  {
    "word": "temperature",
    "meaning": "温度，気温"
  },
  {
    "word": "wind",
    "meaning": "風"
  },
  {
    "word": "breeze",
    "meaning": "そよ風"
  },
  {
    "word": "storm",
    "meaning": "嵐"
  },
  {
    "word": "thunder",
    "meaning": "雷，雷鳴"
  },
  {
    "word": "wave",
    "meaning": "波"
  },
  {
    "word": "ray",
    "meaning": "光線"
  },
  {
    "word": "sunlight",
    "meaning": "日光"
  },
  {
    "word": "sunshine",
    "meaning": "日差し，日なた"
  },
  {
    "word": "sunset",
    "meaning": "日没，夕焼け"
  },
  {
    "word": "landscape",
    "meaning": "風景，景色"
  },
  {
    "word": "continent",
    "meaning": "大陸"
  },
  {
    "word": "ocean",
    "meaning": "海，大洋"
  },
  {
    "word": "island",
    "meaning": "島"
  },
  {
    "word": "ground",
    "meaning": "地面"
  },
  {
    "word": "cave",
    "meaning": "洞窟"
  },
  {
    "word": "bay",
    "meaning": "湾，入り江"
  },
  {
    "word": "coast",
    "meaning": "海岸，沿岸"
  },
  {
    "word": "shore",
    "meaning": "岸"
  },
  {
    "word": "horizon",
    "meaning": "地平線，水平線"
  },
  {
    "word": "valley",
    "meaning": "谷，盆地"
  },
  {
    "word": "desert",
    "meaning": "砂漠"
  },
  {
    "word": "sand",
    "meaning": "砂"
  },
  {
    "word": "mud",
    "meaning": "泥"
  },
  {
    "word": "rock",
    "meaning": "岩，岩石"
  },
  {
    "word": "environment",
    "meaning": "環境"
  },
  {
    "word": "recycle",
    "meaning": "再処理する，リサイクルする"
  },
  {
    "word": "pollution",
    "meaning": "汚染，公害"
  },
  {
    "word": "disaster",
    "meaning": "災害"
  },
  {
    "word": "earthquake",
    "meaning": "地震"
  },
  {
    "word": "flood",
    "meaning": "洪水"
  },
  {
    "word": "rescue",
    "meaning": "救助する"
  },
  {
    "word": "creature",
    "meaning": "生き物，動物"
  },
  {
    "word": "species",
    "meaning": "種"
  },
  {
    "word": "wild",
    "meaning": "野生の"
  },
  {
    "word": "wildlife",
    "meaning": "野生動物"
  },
  {
    "word": "insect",
    "meaning": "昆虫"
  },
  {
    "word": "dinosaur",
    "meaning": "恐竜"
  },
  {
    "word": "hunt",
    "meaning": "狩りをする"
  },
  {
    "word": "bark",
    "meaning": "吠える"
  },
  {
    "word": "nest",
    "meaning": "巣"
  },
  {
    "word": "wood",
    "meaning": "森"
  },
  {
    "word": "bush",
    "meaning": "茂み"
  },
  {
    "word": "branch",
    "meaning": "枝"
  },
  {
    "word": "root",
    "meaning": "根"
  },
  {
    "word": "grass",
    "meaning": "芝生，草"
  },
  {
    "word": "leaf",
    "meaning": "葉"
  },
  {
    "word": "bloom",
    "meaning": "開花"
  },
  {
    "word": "seed",
    "meaning": "種"
  },
  {
    "word": "human",
    "meaning": "人間の"
  },
  {
    "word": "person",
    "meaning": "人，人間"
  },
  {
    "word": "people",
    "meaning": "人々"
  },
  {
    "word": "crowd",
    "meaning": "群衆，人混み"
  },
  {
    "word": "generation",
    "meaning": "世代"
  },
  {
    "word": "male",
    "meaning": "男性の，雄の"
  },
  {
    "word": "female",
    "meaning": "女性の，雌の"
  },
  {
    "word": "gender",
    "meaning": "ジェンダー，性"
  },
  {
    "word": "neighbor",
    "meaning": "隣人"
  },
  {
    "word": "stranger",
    "meaning": "（その土地に）不案内な人"
  },
  {
    "word": "birth",
    "meaning": "誕生"
  },
  {
    "word": "childhood",
    "meaning": "子供時代"
  },
  {
    "word": "youth",
    "meaning": "青年時代"
  },
  {
    "word": "teenager",
    "meaning": "13歳から19歳までの若者"
  },
  {
    "word": "adult",
    "meaning": "大人，成人"
  },
  {
    "word": "junior",
    "meaning": "年少者"
  },
  {
    "word": "senior",
    "meaning": "年長者，高齢者"
  },
  {
    "word": "elderly",
    "meaning": "年配の"
  },
  {
    "word": "dead",
    "meaning": "死んでいる"
  },
  {
    "word": "age",
    "meaning": "年齢"
  },
  {
    "word": "physical",
    "meaning": "身体の，肉体の"
  },
  {
    "word": "condition",
    "meaning": "状態，体調"
  },
  {
    "word": "function",
    "meaning": "機能，働き"
  },
  {
    "word": "sight",
    "meaning": "視力"
  },
  {
    "word": "weight",
    "meaning": "体重"
  },
  {
    "word": "fat",
    "meaning": "太った"
  },
  {
    "word": "thin",
    "meaning": "やせた"
  },
  {
    "word": "slim",
    "meaning": "ほっそりした，スリムな"
  },
  {
    "word": "ugly",
    "meaning": "醜い，不格好な"
  },
  {
    "word": "thirsty",
    "meaning": "喉の渇いた"
  },
  {
    "word": "tear",
    "meaning": "涙"
  },
  {
    "word": "sweat",
    "meaning": "汗"
  },
  {
    "word": "hospital",
    "meaning": "病院"
  },
  {
    "word": "ambulance",
    "meaning": "救急車"
  },
  {
    "word": "wheelchair",
    "meaning": "車椅子"
  },
  {
    "word": "patient",
    "meaning": "患者"
  },
  {
    "word": "disease",
    "meaning": "病気"
  },
  {
    "word": "illness",
    "meaning": "病気"
  },
  {
    "word": "ill",
    "meaning": "病気で，気分が悪い"
  },
  {
    "word": "pain",
    "meaning": "痛み"
  },
  {
    "word": "injure",
    "meaning": "傷つける，痛める"
  },
  {
    "word": "headache",
    "meaning": "頭痛"
  },
  {
    "word": "cancer",
    "meaning": "癌"
  },
  {
    "word": "breathe",
    "meaning": "呼吸する"
  },
  {
    "word": "touch",
    "meaning": "触れる"
  },
  {
    "word": "pat",
    "meaning": "（手のひらで）軽くたたく"
  },
  {
    "word": "shout",
    "meaning": "叫ぶ，大声で話す"
  },
  {
    "word": "scream",
    "meaning": "金切り声を出す"
  },
  {
    "word": "whisper",
    "meaning": "ささやく"
  },
  {
    "word": "bow",
    "meaning": "おじぎをする"
  },
  {
    "word": "bend",
    "meaning": "かがむ"
  },
  {
    "word": "forehead",
    "meaning": "額"
  },
  {
    "word": "cheek",
    "meaning": "頬"
  },
  {
    "word": "lip",
    "meaning": "唇"
  },
  {
    "word": "tooth",
    "meaning": "歯"
  },
  {
    "word": "throat",
    "meaning": "喉"
  },
  {
    "word": "shoulder",
    "meaning": "肩"
  },
  {
    "word": "chest",
    "meaning": "胸"
  },
  {
    "word": "elbow",
    "meaning": "肘"
  },
  {
    "word": "finger",
    "meaning": "（手の）指"
  },
  {
    "word": "thumb",
    "meaning": "（手の）親指"
  },
  {
    "word": "nail",
    "meaning": "爪"
  },
  {
    "word": "toe",
    "meaning": "（足の）指，つま先"
  },
  {
    "word": "ankle",
    "meaning": "足首"
  },
  {
    "word": "skin",
    "meaning": "皮膚，肌"
  },
  {
    "word": "brain",
    "meaning": "脳"
  },
  {
    "word": "heart",
    "meaning": "心臓"
  },
  {
    "word": "stomach",
    "meaning": "胃"
  },
  {
    "word": "blood",
    "meaning": "血液"
  },
  {
    "word": "bone",
    "meaning": "骨"
  },
  {
    "word": "muscle",
    "meaning": "筋肉"
  },
  {
    "word": "emotion",
    "meaning": "感情"
  },
  {
    "word": "mind",
    "meaning": "心，精神"
  },
  {
    "word": "mental",
    "meaning": "心の，精神の"
  },
  {
    "word": "pleasant",
    "meaning": "楽しい"
  },
  {
    "word": "suffer",
    "meaning": "苦しむ"
  },
  {
    "word": "upset",
    "meaning": "取り乱して，動転して"
  },
  {
    "word": "nervous",
    "meaning": "心配して，緊張して"
  },
  {
    "word": "lonely",
    "meaning": "孤独な，ひとりぼっちの"
  },
  {
    "word": "shocked",
    "meaning": "ショックを受けた"
  },
  {
    "word": "stress",
    "meaning": "ストレス"
  },
  {
    "word": "mad",
    "meaning": "怒って"
  },
  {
    "word": "anger",
    "meaning": "怒り"
  },
  {
    "word": "joy",
    "meaning": "喜び"
  },
  {
    "word": "relaxed",
    "meaning": "くつろいだ"
  },
  {
    "word": "fear",
    "meaning": "恐怖"
  },
  {
    "word": "panic",
    "meaning": "パニック"
  },
  {
    "word": "character",
    "meaning": "性格"
  },
  {
    "word": "humor",
    "meaning": "ユーモア"
  },
  {
    "word": "frank",
    "meaning": "率直な"
  },
  {
    "word": "cheerful",
    "meaning": "元気な，陽気な"
  },
  {
    "word": "friendly",
    "meaning": "親切な，好意的な"
  },
  {
    "word": "gentle",
    "meaning": "優しい"
  },
  {
    "word": "calm",
    "meaning": "落ち着いた"
  },
  {
    "word": "lively",
    "meaning": "元気な，活発な"
  },
  {
    "word": "shy",
    "meaning": "恥ずかしがりの"
  },
  {
    "word": "strict",
    "meaning": "厳しい，厳格な"
  },
  {
    "word": "positive",
    "meaning": "前向きの，積極的な"
  },
  {
    "word": "negative",
    "meaning": "後ろ向きの，消極的な"
  },
  {
    "word": "active",
    "meaning": "活動的な，活発な"
  },
  {
    "word": "lazy",
    "meaning": "怠惰な"
  },
  {
    "word": "communication",
    "meaning": "コミュニケーション，意思伝達"
  },
  {
    "word": "greet",
    "meaning": "挨拶する"
  },
  {
    "word": "conversation",
    "meaning": "会話"
  },
  {
    "word": "chat",
    "meaning": "おしゃべりする"
  },
  {
    "word": "text",
    "meaning": "メッセージを送る"
  },
  {
    "word": "e-mail",
    "meaning": "Eメール"
  },
  {
    "word": "address",
    "meaning": "住所，アドレス"
  },
  {
    "word": "translate",
    "meaning": "翻訳する"
  },
  {
    "word": "argue",
    "meaning": "口論する，言い争う"
  },
  {
    "word": "claim",
    "meaning": "主張する"
  },
  {
    "word": "insist",
    "meaning": "強く主張する"
  },
  {
    "word": "praise",
    "meaning": "ほめる，賞賛する"
  },
  {
    "word": "debate",
    "meaning": "討論，ディベート"
  },
  {
    "word": "blame",
    "meaning": "非難する"
  },
  {
    "word": "joke",
    "meaning": "冗談"
  },
  {
    "word": "pronounce",
    "meaning": "発音する"
  },
  {
    "word": "express",
    "meaning": "言い表す"
  },
  {
    "word": "state",
    "meaning": "はっきりと述べる"
  },
  {
    "word": "define",
    "meaning": "定義する"
  },
  {
    "word": "describe",
    "meaning": "特徴を述べる"
  },
  {
    "word": "refer",
    "meaning": "言及する"
  },
  {
    "word": "predict",
    "meaning": "予測する，予言する"
  },
  {
    "word": "comment",
    "meaning": "論評，コメント"
  },
  {
    "word": "term",
    "meaning": "用語，専門用語"
  },
  {
    "word": "publish",
    "meaning": "出版する"
  },
  {
    "word": "novel",
    "meaning": "小説"
  },
  {
    "word": "fiction",
    "meaning": "フィクション，作り話"
  },
  {
    "word": "essay",
    "meaning": "小論文，エッセイ"
  },
  {
    "word": "newspaper",
    "meaning": "新聞"
  },
  {
    "word": "magazine",
    "meaning": "雑誌"
  },
  {
    "word": "journal",
    "meaning": "専門誌"
  },
  {
    "word": "article",
    "meaning": "記事"
  },
  {
    "word": "title",
    "meaning": "題名，タイトル"
  },
  {
    "word": "poem",
    "meaning": "詩"
  },
  {
    "word": "tale",
    "meaning": "話，物語"
  },
  {
    "word": "chapter",
    "meaning": "章"
  },
  {
    "word": "education",
    "meaning": "教育"
  },
  {
    "word": "knowledge",
    "meaning": "知識"
  },
  {
    "word": "intelligent",
    "meaning": "知能の高い"
  },
  {
    "word": "logic",
    "meaning": "論理"
  },
  {
    "word": "talent",
    "meaning": "才能"
  },
  {
    "word": "master",
    "meaning": "習得する"
  },
  {
    "word": "solve",
    "meaning": "解く，解決する"
  },
  {
    "word": "review",
    "meaning": "復習する，論評する"
  },
  {
    "word": "textbook",
    "meaning": "教科書"
  },
  {
    "word": "dictionary",
    "meaning": "辞書"
  },
  {
    "word": "lecture",
    "meaning": "講義"
  },
  {
    "word": "subject",
    "meaning": "科目"
  },
  {
    "word": "mathematics",
    "meaning": "数学"
  },
  {
    "word": "biology",
    "meaning": "生物学"
  },
  {
    "word": "elementary",
    "meaning": "初等の"
  },
  {
    "word": "college",
    "meaning": "大学"
  },
  {
    "word": "university",
    "meaning": "総合大学"
  },
  {
    "word": "scholar",
    "meaning": "学者"
  },
  {
    "word": "enter",
    "meaning": "入学する，入る"
  },
  {
    "word": "attend",
    "meaning": "出席する"
  },
  {
    "word": "absent",
    "meaning": "欠席の"
  },
  {
    "word": "graduate",
    "meaning": "卒業する"
  },
  {
    "word": "grade",
    "meaning": "成績，評点"
  },
  {
    "word": "quiz",
    "meaning": "小テスト"
  },
  {
    "word": "homework",
    "meaning": "宿題"
  },
  {
    "word": "science",
    "meaning": "科学"
  },
  {
    "word": "chemical",
    "meaning": "化学の"
  },
  {
    "word": "experiment",
    "meaning": "実験"
  },
  {
    "word": "element",
    "meaning": "元素"
  },
  {
    "word": "oxygen",
    "meaning": "酸素"
  },
  {
    "word": "technology",
    "meaning": "科学技術"
  },
  {
    "word": "advance",
    "meaning": "進歩"
  },
  {
    "word": "machine",
    "meaning": "機械"
  },
  {
    "word": "automatic",
    "meaning": "自動の"
  },
  {
    "word": "invent",
    "meaning": "発明する"
  },
  {
    "word": "operate",
    "meaning": "操作する"
  },
  {
    "word": "artificial",
    "meaning": "人工の"
  },
  {
    "word": "web",
    "meaning": "ウェブ"
  },
  {
    "word": "material",
    "meaning": "材料，原料"
  },
  {
    "word": "resource",
    "meaning": "資源"
  },
  {
    "word": "energy",
    "meaning": "エネルギー"
  },
  {
    "word": "electricity",
    "meaning": "電気，電力"
  },
  {
    "word": "battery",
    "meaning": "バッテリー，電池"
  },
  {
    "word": "oil",
    "meaning": "石油"
  },
  {
    "word": "gas",
    "meaning": "ガス"
  },
  {
    "word": "coal",
    "meaning": "石炭"
  },
  {
    "word": "metal",
    "meaning": "金属"
  },
  {
    "word": "steel",
    "meaning": "鋼鉄"
  },
  {
    "word": "nuclear",
    "meaning": "核の，原子力の"
  },
  {
    "word": "universe",
    "meaning": "宇宙"
  },
  {
    "word": "planet",
    "meaning": "惑星"
  },
  {
    "word": "astronaut",
    "meaning": "宇宙飛行士"
  },
  {
    "word": "earth",
    "meaning": "地球，地面"
  },
  {
    "word": "cash",
    "meaning": "現金"
  },
  {
    "word": "earn",
    "meaning": "（お金を）得る"
  },
  {
    "word": "reward",
    "meaning": "報酬"
  },
  {
    "word": "income",
    "meaning": "収入"
  },
  {
    "word": "budget",
    "meaning": "予算"
  },
  {
    "word": "tax",
    "meaning": "税金"
  },
  {
    "word": "consume",
    "meaning": "消費する"
  },
  {
    "word": "benefit",
    "meaning": "利益，恩恵"
  },
  {
    "word": "wealth",
    "meaning": "富，財産"
  },
  {
    "word": "price",
    "meaning": "価格"
  },
  {
    "word": "cheap",
    "meaning": "安い"
  },
  {
    "word": "reasonable",
    "meaning": "（値段が）手頃な"
  },
  {
    "word": "sale",
    "meaning": "特売"
  },
  {
    "word": "charge",
    "meaning": "（サービスへの）料金"
  },
  {
    "word": "advertisement",
    "meaning": "広告"
  },
  {
    "word": "commercial",
    "meaning": "営利的な，商業的な"
  },
  {
    "word": "trade",
    "meaning": "貿易，取引"
  },
  {
    "word": "import",
    "meaning": "輸入する"
  },
  {
    "word": "export",
    "meaning": "輸出する"
  },
  {
    "word": "factory",
    "meaning": "工場"
  },
  {
    "word": "agriculture",
    "meaning": "農業"
  },
  {
    "word": "society",
    "meaning": "社会"
  },
  {
    "word": "community",
    "meaning": "地域社会"
  },
  {
    "word": "organization",
    "meaning": "組織，団体"
  },
  {
    "word": "committee",
    "meaning": "委員会"
  },
  {
    "word": "charity",
    "meaning": "慈善事業"
  },
  {
    "word": "citizen",
    "meaning": "国民，市民"
  },
  {
    "word": "duty",
    "meaning": "義務"
  },
  {
    "word": "law",
    "meaning": "法律"
  },
  {
    "word": "judge",
    "meaning": "裁判官"
  },
  {
    "word": "court",
    "meaning": "法廷，裁判所"
  },
  {
    "word": "guard",
    "meaning": "警戒，見張り"
  },
  {
    "word": "arrest",
    "meaning": "逮捕する"
  },
  {
    "word": "punish",
    "meaning": "罰する"
  },
  {
    "word": "crime",
    "meaning": "犯罪"
  },
  {
    "word": "murder",
    "meaning": "殺人，殺人事件"
  },
  {
    "word": "shoot",
    "meaning": "（銃で）撃つ"
  },
  {
    "word": "steal",
    "meaning": "盗む"
  },
  {
    "word": "rob",
    "meaning": "奪う"
  },
  {
    "word": "thief",
    "meaning": "泥棒"
  },
  {
    "word": "victim",
    "meaning": "犠牲者"
  },
  {
    "word": "drug",
    "meaning": "薬物"
  },
  {
    "word": "poverty",
    "meaning": "貧困"
  },
  {
    "word": "government",
    "meaning": "政府"
  },
  {
    "word": "policy",
    "meaning": "政策，方針"
  },
  {
    "word": "nation",
    "meaning": "国家"
  },
  {
    "word": "capital",
    "meaning": "首都"
  },
  {
    "word": "international",
    "meaning": "国際的な，国家間の"
  },
  {
    "word": "global",
    "meaning": "全世界の，地球全体の"
  },
  {
    "word": "election",
    "meaning": "選挙"
  },
  {
    "word": "vote",
    "meaning": "投票をする"
  },
  {
    "word": "president",
    "meaning": "大統領"
  },
  {
    "word": "liberty",
    "meaning": "自由"
  },
  {
    "word": "fight",
    "meaning": "戦う"
  },
  {
    "word": "war",
    "meaning": "戦争，戦争状態"
  },
  {
    "word": "military",
    "meaning": "軍の，軍隊の"
  },
  {
    "word": "army",
    "meaning": "軍隊，陸軍"
  },
  {
    "word": "soldier",
    "meaning": "兵士"
  },
  {
    "word": "weapon",
    "meaning": "武器，兵器"
  },
  {
    "word": "bomb",
    "meaning": "爆弾"
  },
  {
    "word": "break out",
    "meaning": "突然起こる，勃発する"
  },
  {
    "word": "come across",
    "meaning": "〜に偶然会う，〜をふと見つける"
  },
  {
    "word": "come out",
    "meaning": "発売される"
  },
  {
    "word": "come up with",
    "meaning": "〜を思いつく"
  },
  {
    "word": "count on [upon]",
    "meaning": "〜に頼る，〜を当てにする"
  },
  {
    "word": "cut down [back] on",
    "meaning": "〜を減らす"
  },
  {
    "word": "die out",
    "meaning": "（消えて）なくなる，絶滅する"
  },
  {
    "word": "drop in [on]",
    "meaning": "ちょっと訪れる"
  },
  {
    "word": "feel free to",
    "meaning": "自由に…する"
  },
  {
    "word": "get along (with)",
    "meaning": "仲よくやっている"
  },
  {
    "word": "get out of",
    "meaning": "〜から逃れる"
  },
  {
    "word": "get over",
    "meaning": "〜から回復する，立ち直る"
  },
  {
    "word": "get through",
    "meaning": "〜を切り抜ける"
  },
  {
    "word": "give way (to)",
    "meaning": "譲歩する，屈する"
  },
  {
    "word": "go along with",
    "meaning": "〜に賛成する，を支持する"
  },
  {
    "word": "head for",
    "meaning": "〜に向かう"
  },
  {
    "word": "keep [bear] in mind",
    "meaning": "〜を心に留めておく"
  },
  {
    "word": "keep [stay] in touch (with)",
    "meaning": "連絡を取り続ける"
  },
  {
    "word": "learn (how) to",
    "meaning": "…できるようになる"
  },
  {
    "word": "look back (on)",
    "meaning": "回想する，振り返る"
  },
  {
    "word": "look into",
    "meaning": "〜を調査する"
  },
  {
    "word": "look over",
    "meaning": "〜をざっと調べる，〜に目を通す"
  },
  {
    "word": "look up to",
    "meaning": "〜を尊敬する"
  },
  {
    "word": "make a difference (to)",
    "meaning": "影響がある，重要である"
  },
  {
    "word": "make [earn] a living",
    "meaning": "生計を立てる"
  },
  {
    "word": "make up",
    "meaning": "〜を構成する"
  },
  {
    "word": "pass away",
    "meaning": "亡くなる"
  },
  {
    "word": "point out",
    "meaning": "〜を指摘する"
  },
  {
    "word": "put off",
    "meaning": "〜を延期する"
  },
  {
    "word": "put together",
    "meaning": "〜を組み立てる，まとめ上げる"
  },
  {
    "word": "put up with",
    "meaning": "〜を我慢する"
  },
  {
    "word": "run after",
    "meaning": "〜を追いかける"
  },
  {
    "word": "run away (from)",
    "meaning": "逃げる"
  },
  {
    "word": "run out of",
    "meaning": "〜を使い果たす"
  },
  {
    "word": "stand for",
    "meaning": "〜を意味する，〜の略称である"
  },
  {
    "word": "stand out",
    "meaning": "ずば抜けている"
  },
  {
    "word": "take A for B",
    "meaning": "AをBだと思う"
  },
  {
    "word": "take place",
    "meaning": "起こる，行われる"
  },
  {
    "word": "take up",
    "meaning": "〜を始める"
  },
  {
    "word": "work on",
    "meaning": "〜に取り組む"
  },
  {
    "word": "all at once",
    "meaning": "（予期せず）突然"
  },
  {
    "word": "all the way",
    "meaning": "はるばる，ずっと"
  },
  {
    "word": "along with",
    "meaning": "〜と一緒に，〜に加えて"
  },
  {
    "word": "at least",
    "meaning": "少なくとも"
  },
  {
    "word": "at (the) most",
    "meaning": "せいぜい，多くても"
  },
  {
    "word": "by way of",
    "meaning": "〜を通って"
  },
  {
    "word": "for some time",
    "meaning": "かなり長い間"
  },
  {
    "word": "face to face (with)",
    "meaning": "面と向かって"
  },
  {
    "word": "first of all",
    "meaning": "まず第一に"
  },
  {
    "word": "in advance",
    "meaning": "あらかじめ，〜前に"
  },
  {
    "word": "in all",
    "meaning": "全部で"
  },
  {
    "word": "in place of",
    "meaning": "〜の代わりに"
  },
  {
    "word": "in return (for)",
    "meaning": "お返しに"
  },
  {
    "word": "in the long run",
    "meaning": "長い目で見れば"
  },
  {
    "word": "in time (for)",
    "meaning": "間に合うように，遅れずに"
  },
  {
    "word": "on sale",
    "meaning": "販売されて"
  },
  {
    "word": "on time",
    "meaning": "時間通りに，定刻に"
  },
  {
    "word": "one by one",
    "meaning": "１つずつ，１人ずつ"
  },
  {
    "word": "out of the question",
    "meaning": "論外で，不可能で"
  },
  {
    "word": "side by side (with)",
    "meaning": "（横に）並んで"
  },
  {
    "word": "become",
    "meaning": "になる"
  },
  {
    "word": "turn",
    "meaning": "になる，変わる"
  },
  {
    "word": "remain",
    "meaning": "のままである"
  },
  {
    "word": "smell",
    "meaning": "のにおいがする"
  },
  {
    "word": "taste",
    "meaning": "の味がする"
  },
  {
    "word": "take",
    "meaning": "連れて行く，持って行く"
  },
  {
    "word": "put",
    "meaning": "置く，入れる"
  },
  {
    "word": "set",
    "meaning": "置く，配置する"
  },
  {
    "word": "spread",
    "meaning": "広げる"
  },
  {
    "word": "fold",
    "meaning": "折る，折りたたむ"
  },
  {
    "word": "show",
    "meaning": "見せる，示す"
  },
  {
    "word": "give",
    "meaning": "与える，あげる"
  },
  {
    "word": "choose",
    "meaning": "選ぶ"
  },
  {
    "word": "pay",
    "meaning": "支払う"
  },
  {
    "word": "leave",
    "meaning": "残しておく"
  },
  {
    "word": "offer",
    "meaning": "申し出る"
  },
  {
    "word": "bring",
    "meaning": "持ってくる，連れてくる"
  },
  {
    "word": "send",
    "meaning": "送る"
  },
  {
    "word": "pass",
    "meaning": "手渡す"
  },
  {
    "word": "sell",
    "meaning": "売る"
  },
  {
    "word": "draw",
    "meaning": "描く，引く"
  },
  {
    "word": "owe",
    "meaning": "にお金を借りている"
  },
  {
    "word": "lend",
    "meaning": "貸す"
  },
  {
    "word": "envy",
    "meaning": "うらやむ"
  },
  {
    "word": "make",
    "meaning": "（ある状態）にする"
  },
  {
    "word": "find",
    "meaning": "見つける、気づく"
  },
  {
    "word": "keep",
    "meaning": "保つ"
  },
  {
    "word": "call",
    "meaning": "と呼ぶ"
  },
  {
    "word": "know",
    "meaning": "知っている"
  },
  {
    "word": "understand",
    "meaning": "理解する，わかる"
  },
  {
    "word": "believe",
    "meaning": "信じる，信用する"
  },
  {
    "word": "notice",
    "meaning": "気づく"
  },
  {
    "word": "exist",
    "meaning": "存在する"
  },
  {
    "word": "discuss",
    "meaning": "について議論する"
  },
  {
    "word": "agree",
    "meaning": "意見が一致する"
  },
  {
    "word": "disagree",
    "meaning": "意見が異なる"
  },
  {
    "word": "raise",
    "meaning": "上げる"
  },
  {
    "word": "rise",
    "meaning": "上がる"
  },
  {
    "word": "approach",
    "meaning": "近づく，接近する"
  },
  {
    "word": "complain",
    "meaning": "不平［苦情］を言う"
  },
  {
    "word": "lie",
    "meaning": "横たわる，ある"
  },
  {
    "word": "lay",
    "meaning": "横たえる，置く"
  },
  {
    "word": "marry",
    "meaning": "と結婚する"
  },
  {
    "word": "order",
    "meaning": "命じる"
  },
  {
    "word": "demand",
    "meaning": "要求する"
  },
  {
    "word": "request",
    "meaning": "頼む，要請する"
  },
  {
    "word": "seem",
    "meaning": "のように思える"
  },
  {
    "word": "appear",
    "meaning": "のように見える［思える］"
  },
  {
    "word": "prove",
    "meaning": "と判明する"
  },
  {
    "word": "tell",
    "meaning": "伝える，言う"
  },
  {
    "word": "expect",
    "meaning": "予期［予想］する"
  },
  {
    "word": "warn",
    "meaning": "に警告［注意］する"
  },
  {
    "word": "forbid",
    "meaning": "禁ずる"
  },
  {
    "word": "feel",
    "meaning": "感じる"
  },
  {
    "word": "hear",
    "meaning": "が聞こえる"
  },
  {
    "word": "watch",
    "meaning": "（じっと）見る"
  },
  {
    "word": "decide",
    "meaning": "決める"
  },
  {
    "word": "manage",
    "meaning": "何とかやり遂げる"
  },
  {
    "word": "promise",
    "meaning": "約束する"
  },
  {
    "word": "afford",
    "meaning": "の余裕がある"
  },
  {
    "word": "pretend",
    "meaning": "ふりをする"
  },
  {
    "word": "refuse",
    "meaning": "断る，拒否する"
  },
  {
    "word": "consider",
    "meaning": "よく考える"
  },
  {
    "word": "stop",
    "meaning": "やめる"
  },
  {
    "word": "finish",
    "meaning": "終える"
  },
  {
    "word": "avoid",
    "meaning": "避ける"
  },
  {
    "word": "imagine",
    "meaning": "想像する"
  },
  {
    "word": "escape",
    "meaning": "逃れる，免れる"
  },
  {
    "word": "quit",
    "meaning": "やめる"
  },
  {
    "word": "dislike",
    "meaning": "嫌う"
  },
  {
    "word": "start",
    "meaning": "始める，出発する"
  },
  {
    "word": "begin",
    "meaning": "始める"
  },
  {
    "word": "continue",
    "meaning": "続ける"
  },
  {
    "word": "prefer",
    "meaning": "の方を好む"
  },
  {
    "word": "hate",
    "meaning": "ひどく嫌う，憎む"
  },
  {
    "word": "try",
    "meaning": "試みる"
  },
  {
    "word": "remember",
    "meaning": "覚えている，思い出す"
  },
  {
    "word": "forget",
    "meaning": "忘れる"
  },
  {
    "word": "regret",
    "meaning": "後悔する"
  },
  {
    "word": "air",
    "meaning": "空気，大気"
  },
  {
    "word": "cloth",
    "meaning": "布，布地"
  },
  {
    "word": "paper",
    "meaning": "紙"
  },
  {
    "word": "iron",
    "meaning": "鉄，鉄分"
  },
  {
    "word": "audience",
    "meaning": "聴衆，観客"
  },
  {
    "word": "police",
    "meaning": "警察官"
  },
  {
    "word": "staff",
    "meaning": "スタッフ，職員"
  },
  {
    "word": "furniture",
    "meaning": "家具"
  },
  {
    "word": "stuff",
    "meaning": "（漠然と）物，こと"
  },
  {
    "word": "baggage",
    "meaning": "手荷物"
  },
  {
    "word": "information",
    "meaning": "情報"
  },
  {
    "word": "ability",
    "meaning": "能力"
  },
  {
    "word": "advice",
    "meaning": "助言，忠告"
  },
  {
    "word": "beauty",
    "meaning": "美，美しさ"
  },
  {
    "word": "death",
    "meaning": "死"
  },
  {
    "word": "freedom",
    "meaning": "自由"
  },
  {
    "word": "peace",
    "meaning": "平和"
  },
  {
    "word": "customer",
    "meaning": "（店の）客，顧客"
  },
  {
    "word": "guest",
    "meaning": "（招待）客，ゲスト"
  },
  {
    "word": "habit",
    "meaning": "（個人の）習慣，癖"
  },
  {
    "word": "custom",
    "meaning": "（社会的）慣習，風習"
  },
  {
    "word": "fee",
    "meaning": "（入場・加入などの）料金，会費"
  },
  {
    "word": "fare",
    "meaning": "（交通機関の）運賃，料金"
  },
  {
    "word": "appointment",
    "meaning": "（面会の）約束，（医者などの）予約"
  },
  {
    "word": "idea",
    "meaning": "考え，アイデア"
  },
  {
    "word": "fact",
    "meaning": "事実，現実"
  },
  {
    "word": "feeling",
    "meaning": "気持ち，感情"
  },
  {
    "word": "evidence",
    "meaning": "証拠"
  },
  {
    "word": "other",
    "meaning": "もう一方"
  },
  {
    "word": "another",
    "meaning": "別の物［人］"
  },
  {
    "word": "each",
    "meaning": "それぞれ"
  },
  {
    "word": "both",
    "meaning": "両方"
  },
  {
    "word": "either",
    "meaning": "（二者のうち）どちらか，どちらでも"
  },
  {
    "word": "neither",
    "meaning": "（二者のうち）どちらも…ない"
  },
  {
    "word": "none",
    "meaning": "どれ［誰］も…ない"
  },
  {
    "word": "something",
    "meaning": "何か"
  },
  {
    "word": "anything",
    "meaning": "何も（〜ない），何か，何でも"
  },
  {
    "word": "nothing",
    "meaning": "何も〜ない"
  },
  {
    "word": "everything",
    "meaning": "すべての物［こと］"
  },
  {
    "word": "everyone",
    "meaning": "みんな，誰でも"
  },
  {
    "word": "someone",
    "meaning": "誰か，ある人"
  },
  {
    "word": "anyone",
    "meaning": "誰か，誰も（〜ない），誰でも"
  },
  {
    "word": "nobody",
    "meaning": "誰も〜ない"
  },
  {
    "word": "main",
    "meaning": "主な，主要な"
  },
  {
    "word": "daily",
    "meaning": "毎日の，日々の"
  },
  {
    "word": "alone",
    "meaning": "ただ１人で"
  },
  {
    "word": "aware",
    "meaning": "気づいて"
  },
  {
    "word": "awake",
    "meaning": "目が覚めて"
  },
  {
    "word": "asleep",
    "meaning": "眠って"
  },
  {
    "word": "alive",
    "meaning": "生きて（いる）"
  },
  {
    "word": "alike",
    "meaning": "似ている，同様な"
  },
  {
    "word": "right",
    "meaning": "右の，正しい"
  },
  {
    "word": "present",
    "meaning": "現在の，出席して"
  },
  {
    "word": "certain",
    "meaning": "ある〜，確信して"
  },
  {
    "word": "interested",
    "meaning": "興味を持って"
  },
  {
    "word": "surprised",
    "meaning": "驚いて"
  },
  {
    "word": "tired",
    "meaning": "飽きて，うんざりして"
  },
  {
    "word": "pleased",
    "meaning": "喜んで"
  },
  {
    "word": "satisfied",
    "meaning": "満足して"
  },
  {
    "word": "bored",
    "meaning": "退屈して，うんざりして"
  },
  {
    "word": "excited",
    "meaning": "興奮して，わくわくして"
  },
  {
    "word": "confused",
    "meaning": "困惑［混乱］して"
  },
  {
    "word": "scared",
    "meaning": "怖がって"
  },
  {
    "word": "able",
    "meaning": "できる"
  },
  {
    "word": "likely",
    "meaning": "ありそうな"
  },
  {
    "word": "sure",
    "meaning": "確信して"
  },
  {
    "word": "ready",
    "meaning": "準備［用意］のできた"
  },
  {
    "word": "eager",
    "meaning": "熱望して"
  },
  {
    "word": "polite",
    "meaning": "礼儀正しい，丁寧な"
  },
  {
    "word": "clever",
    "meaning": "利口な"
  },
  {
    "word": "brave",
    "meaning": "勇敢な"
  },
  {
    "word": "wise",
    "meaning": "賢明な，賢い"
  },
  {
    "word": "rude",
    "meaning": "失礼な"
  },
  {
    "word": "silly",
    "meaning": "愚かな，ばかげた"
  },
  {
    "word": "foolish",
    "meaning": "愚かな，ばかげた"
  },
  {
    "word": "stupid",
    "meaning": "愚かな，ばかげた"
  },
  {
    "word": "careless",
    "meaning": "不注意な"
  },
  {
    "word": "important",
    "meaning": "重要な"
  },
  {
    "word": "necessary",
    "meaning": "必要な"
  },
  {
    "word": "proper",
    "meaning": "正当な，当然な"
  },
  {
    "word": "strange",
    "meaning": "奇妙な，不思議な"
  },
  {
    "word": "wrong",
    "meaning": "間違った"
  },
  {
    "word": "few",
    "meaning": "（可算名詞の前で）ほとんどない"
  },
  {
    "word": "little",
    "meaning": "（不可算名詞の前で）ほとんどない"
  },
  {
    "word": "late",
    "meaning": "遅れた／遅く，遅れて"
  },
  {
    "word": "far",
    "meaning": "遠い方の／遠くに［へ］"
  },
  {
    "word": "hard",
    "meaning": "難しい，困難な／懸命に，熱心に"
  },
  {
    "word": "fast",
    "meaning": "速い，素早い／速く"
  },
  {
    "word": "deep",
    "meaning": "深い／深く"
  },
  {
    "word": "direct",
    "meaning": "直接の／直接に，まっすぐ"
  },
  {
    "word": "well",
    "meaning": "健康で／十分に，よく"
  },
  {
    "word": "wide",
    "meaning": "広い／大きく，すっかり"
  },
  {
    "word": "pretty",
    "meaning": "かわいい／かなり"
  },
  {
    "word": "sharp",
    "meaning": "鋭い，とがった／ちょうど，きっかり"
  },
  {
    "word": "just",
    "meaning": "たった今，ちょうど（〜したばかり）"
  },
  {
    "word": "already",
    "meaning": "もう，すでに"
  },
  {
    "word": "recently",
    "meaning": "（ここ）最近"
  },
  {
    "word": "lately",
    "meaning": "（ここ）最近"
  },
  {
    "word": "yet",
    "meaning": "まだ（〜ない）"
  },
  {
    "word": "ever",
    "meaning": "これまでに，かつて"
  },
  {
    "word": "twice",
    "meaning": "２度，２回"
  },
  {
    "word": "only",
    "meaning": "だけ，しか（〜ない）"
  },
  {
    "word": "always",
    "meaning": "いつも，必ず"
  },
  {
    "word": "sometimes",
    "meaning": "時々"
  },
  {
    "word": "usually",
    "meaning": "たいてい，ふつうは"
  },
  {
    "word": "nearly",
    "meaning": "ほとんど，ほぼ"
  },
  {
    "word": "hardly",
    "meaning": "（程度が）ほとんど〜ない"
  },
  {
    "word": "while",
    "meaning": "…している間"
  },
  {
    "word": "unless",
    "meaning": "…でない限り，もし…でなければ"
  },
  {
    "word": "nor",
    "meaning": "もまた（…ない）"
  },
  {
    "word": "whatever",
    "meaning": "何が［を］…しようとも"
  },
  {
    "word": "whichever",
    "meaning": "どちらが［を］…しようとも"
  },
  {
    "word": "whenever",
    "meaning": "…するときはいつでも，…するたびに"
  },
  {
    "word": "wherever",
    "meaning": "…する所ならどこでも"
  },
  {
    "word": "cause",
    "meaning": "を引き起こす"
  },
  {
    "word": "allow",
    "meaning": "を可能にする"
  },
  {
    "word": "enable",
    "meaning": "を可能にする"
  },
  {
    "word": "prevent",
    "meaning": "を妨げる，中止させる"
  },
  {
    "word": "force",
    "meaning": "を強いる"
  },
  {
    "word": "cost",
    "meaning": "（金額・費用が）かかる"
  },
  {
    "word": "remind",
    "meaning": "に思い出させる"
  },
  {
    "word": "believe in",
    "meaning": "〜の存在を信じる"
  },
  {
    "word": "bring out",
    "meaning": "〜を引き出す"
  },
  {
    "word": "bring up",
    "meaning": "〜を育てる"
  },
  {
    "word": "call for",
    "meaning": "〜を必要とする"
  },
  {
    "word": "call off",
    "meaning": "〜を中心する，取り消す"
  },
  {
    "word": "decide on [upon]",
    "meaning": "〜に決める"
  },
  {
    "word": "feel like (-ing)",
    "meaning": "…したい気がする"
  },
  {
    "word": "give up (-ing)",
    "meaning": "…することをやめる，諦める"
  },
  {
    "word": "go on (-ing)",
    "meaning": "…し続ける"
  },
  {
    "word": "have [be] nothing to do with",
    "meaning": "〜と何も関係がない"
  },
  {
    "word": "lie in [with]",
    "meaning": "（責任・問題などが）〜にある"
  },
  {
    "word": "make it",
    "meaning": "うまくいく，成功する"
  },
  {
    "word": "make oneself understood",
    "meaning": "自分の考えが（相手に）通じる"
  },
  {
    "word": "pass on",
    "meaning": "伝える，渡す"
  },
  {
    "word": "put away",
    "meaning": "〜を片付ける"
  },
  {
    "word": "put on",
    "meaning": "〜を身につける，着る"
  },
  {
    "word": "show up",
    "meaning": "（人が）現れる，やって来る"
  },
  {
    "word": "take [have] a walk",
    "meaning": "散歩する"
  },
  {
    "word": "take time (to do)",
    "meaning": "（…するのに）時間がかかる"
  },
  {
    "word": "tell A from B",
    "meaning": "AとBを区別する"
  },
  {
    "word": "throw away",
    "meaning": "〜を捨てる"
  },
  {
    "word": "try on",
    "meaning": "〜を試着する"
  },
  {
    "word": "turn A into B",
    "meaning": "AをBに変える"
  },
  {
    "word": "turn off",
    "meaning": "〜を切る，消す"
  },
  {
    "word": "turn on",
    "meaning": "〜をつける"
  },
  {
    "word": "turn out to be",
    "meaning": "〜であることがわかる"
  },
  {
    "word": "turn over",
    "meaning": "〜をひっくり返す"
  },
  {
    "word": "be known for",
    "meaning": "〜のことで有名だ"
  },
  {
    "word": "be unable to",
    "meaning": "…することができない"
  },
  {
    "word": "be used to (-ing)",
    "meaning": "…することに慣れている"
  },
  {
    "word": "be willing to",
    "meaning": "…してもかまわない，…する気がある"
  },
  {
    "word": "as ~ as ever",
    "meaning": "相変わらず〜で"
  },
  {
    "word": "as usual",
    "meaning": "いつものように"
  },
  {
    "word": "as well",
    "meaning": "〜もまた，同じように"
  },
  {
    "word": "at a loss",
    "meaning": "途方に暮れて，困って"
  },
  {
    "word": "at present",
    "meaning": "現在，目下"
  },
  {
    "word": "at the age of",
    "meaning": "〜歳で"
  },
  {
    "word": "before long",
    "meaning": "間もなく，ほどなく"
  },
  {
    "word": "for a while",
    "meaning": "しばらくの間"
  },
  {
    "word": "for sure [certain]",
    "meaning": "確かに"
  },
  {
    "word": "for the sake of",
    "meaning": "〜のために"
  },
  {
    "word": "in a [one] way",
    "meaning": "ある意味で"
  },
  {
    "word": "in danger of",
    "meaning": "〜の恐れがあって"
  },
  {
    "word": "in (actual) fact",
    "meaning": "実際には"
  },
  {
    "word": "in turn",
    "meaning": "順番に，交替で"
  },
  {
    "word": "little by little",
    "meaning": "少しずつ"
  },
  {
    "word": "no doubt",
    "meaning": "きっと"
  },
  {
    "word": "one after another [the other]",
    "meaning": "次々と"
  },
  {
    "word": "right away [off]",
    "meaning": "直ちに，すぐに"
  },
  {
    "word": "so far",
    "meaning": "これまでのところ"
  },
  {
    "word": "the other day",
    "meaning": "先日"
  },
  {
    "word": "to one’s surprise",
    "meaning": "〜が驚いたことに"
  },
  {
    "word": "as [so] far as",
    "meaning": "…する限りは"
  },
  {
    "word": "as many [much] as",
    "meaning": "〜も多くの"
  },
  {
    "word": "both A and B",
    "meaning": "AもBも"
  },
  {
    "word": "either A or B",
    "meaning": "AかBのどちらか"
  },
  {
    "word": "each other",
    "meaning": "お互い"
  },
  {
    "word": "every other",
    "meaning": "〜ごとに，〜おきに"
  },
  {
    "word": "something is wrong with",
    "meaning": "〜はどこか調子が悪い"
  },
  {
    "word": "What is ~ like?",
    "meaning": "〜はどのようなもの［人］ですか"
  },
  {
    "word": "spend",
    "meaning": "費やす，使う"
  },
  {
    "word": "increase",
    "meaning": "増える"
  },
  {
    "word": "decrease",
    "meaning": "減る"
  },
  {
    "word": "improve",
    "meaning": "改善する，向上させる"
  },
  {
    "word": "provide",
    "meaning": "提供［供給］する"
  },
  {
    "word": "include",
    "meaning": "含む"
  },
  {
    "word": "develop",
    "meaning": "発達［発展］させる"
  },
  {
    "word": "receive",
    "meaning": "受け取る，受ける"
  },
  {
    "word": "explain",
    "meaning": "説明する"
  },
  {
    "word": "lead",
    "meaning": "至る，導く"
  },
  {
    "word": "perform",
    "meaning": "うまくいく，機能する"
  },
  {
    "word": "realize",
    "meaning": "気づく，認識する"
  },
  {
    "word": "produce",
    "meaning": "引き起こす，もたらす"
  },
  {
    "word": "participate",
    "meaning": "参加する"
  },
  {
    "word": "suggest",
    "meaning": "示す，暗示する"
  },
  {
    "word": "encourage",
    "meaning": "促進する，奨励する"
  },
  {
    "word": "apply",
    "meaning": "当てはまる"
  },
  {
    "word": "affect",
    "meaning": "影響する"
  },
  {
    "word": "recognize",
    "meaning": "わかる，識別する"
  },
  {
    "word": "require",
    "meaning": "要求する"
  },
  {
    "word": "maintain",
    "meaning": "維持する"
  },
  {
    "word": "tend",
    "meaning": "…する傾向がある，…しがちである"
  },
  {
    "word": "contain",
    "meaning": "含む"
  },
  {
    "word": "represent",
    "meaning": "表す，象徴する"
  },
  {
    "word": "reach",
    "meaning": "に届く，達する"
  },
  {
    "word": "mention",
    "meaning": "話に出す，言及する"
  },
  {
    "word": "focus",
    "meaning": "集中する，焦点を合わせる"
  },
  {
    "word": "rent",
    "meaning": "（有料で）借りる"
  },
  {
    "word": "guess",
    "meaning": "推測する"
  },
  {
    "word": "add",
    "meaning": "加える"
  },
  {
    "word": "delay",
    "meaning": "遅らせる"
  },
  {
    "word": "select",
    "meaning": "選び出す"
  },
  {
    "word": "system",
    "meaning": "（体系的）方法，方式"
  },
  {
    "word": "experience",
    "meaning": "経験，体験"
  },
  {
    "word": "activity",
    "meaning": "活動"
  },
  {
    "word": "program",
    "meaning": "計画，プログラム"
  },
  {
    "word": "care",
    "meaning": "注意"
  },
  {
    "word": "situation",
    "meaning": "状況，事態"
  },
  {
    "word": "research",
    "meaning": "研究，調査"
  },
  {
    "word": "passage",
    "meaning": "（本・音楽などの）一節"
  },
  {
    "word": "factor",
    "meaning": "要因，要素"
  },
  {
    "word": "value",
    "meaning": "価値"
  },
  {
    "word": "influence",
    "meaning": "影響，影響力"
  },
  {
    "word": "author",
    "meaning": "著者，作者"
  },
  {
    "word": "role",
    "meaning": "役割"
  },
  {
    "word": "average",
    "meaning": "平均"
  },
  {
    "word": "friendship",
    "meaning": "交友関係"
  },
  {
    "word": "view",
    "meaning": "意見，考え"
  },
  {
    "word": "result",
    "meaning": "結果"
  },
  {
    "word": "surface",
    "meaning": "外見，うわべ"
  },
  {
    "word": "rate",
    "meaning": "割合，比率"
  },
  {
    "word": "process",
    "meaning": "過程"
  },
  {
    "word": "topic",
    "meaning": "話題，トピック"
  },
  {
    "word": "variety",
    "meaning": "種類"
  },
  {
    "word": "risk",
    "meaning": "危険，リスク"
  },
  {
    "word": "amount",
    "meaning": "量，合計"
  },
  {
    "word": "skill",
    "meaning": "技能，技術"
  },
  {
    "word": "period",
    "meaning": "期間"
  },
  {
    "word": "center",
    "meaning": "中心"
  },
  {
    "word": "sense",
    "meaning": "感覚"
  },
  {
    "word": "opportunity",
    "meaning": "機会"
  },
  {
    "word": "effect",
    "meaning": "影響，効果"
  },
  {
    "word": "public",
    "meaning": "大衆，一般の人々"
  },
  {
    "word": "transportation",
    "meaning": "交通機関"
  },
  {
    "word": "atmosphere",
    "meaning": "雰囲気"
  },
  {
    "word": "attention",
    "meaning": "注意，注意力"
  },
  {
    "word": "space",
    "meaning": "場所，空間"
  },
  {
    "word": "behavior",
    "meaning": "振る舞い，行儀"
  },
  {
    "word": "object",
    "meaning": "物，物体"
  },
  {
    "word": "company",
    "meaning": "会社"
  },
  {
    "word": "field",
    "meaning": "分野，領域"
  },
  {
    "word": "following",
    "meaning": "次の，以下の"
  },
  {
    "word": "various",
    "meaning": "さまざまな，多様な"
  },
  {
    "word": "several",
    "meaning": "いくつかの"
  },
  {
    "word": "local",
    "meaning": "地元の，現地の"
  },
  {
    "word": "related",
    "meaning": "関連して"
  },
  {
    "word": "possible",
    "meaning": "可能な"
  },
  {
    "word": "similar",
    "meaning": "似ている，同様の"
  },
  {
    "word": "concerned",
    "meaning": "心配して"
  },
  {
    "word": "available",
    "meaning": "利用できる，手に入る"
  },
  {
    "word": "dry",
    "meaning": "雨の少ない，乾燥した"
  },
  {
    "word": "past",
    "meaning": "過ぎたばかりの，この前の"
  },
  {
    "word": "modern",
    "meaning": "近代的な，最新の"
  },
  {
    "word": "unique",
    "meaning": "特有の"
  },
  {
    "word": "common",
    "meaning": "よくある，普通の"
  },
  {
    "word": "prepare",
    "meaning": "準備［用意］する"
  },
  {
    "word": "regard",
    "meaning": "（〜と）思う，考える"
  },
  {
    "word": "occur",
    "meaning": "（予期せず）起こる"
  },
  {
    "word": "suppose",
    "meaning": "だと思う，考える"
  },
  {
    "word": "serve",
    "meaning": "（食事を）出す"
  },
  {
    "word": "wonder",
    "meaning": "だろうかと思う"
  },
  {
    "word": "reduce",
    "meaning": "減らす"
  },
  {
    "word": "promote",
    "meaning": "促進する"
  },
  {
    "word": "survive",
    "meaning": "生き延びる，切り抜ける"
  },
  {
    "word": "gain",
    "meaning": "得る"
  },
  {
    "word": "devide",
    "meaning": "分ける，分かれる"
  },
  {
    "word": "attract",
    "meaning": "引き寄せる"
  },
  {
    "word": "achieve",
    "meaning": "達成する"
  },
  {
    "word": "fit",
    "meaning": "適する，合致する"
  },
  {
    "word": "reveal",
    "meaning": "明らかにする"
  },
  {
    "word": "wish",
    "meaning": "願う"
  },
  {
    "word": "fill",
    "meaning": "満たす"
  },
  {
    "word": "hurt",
    "meaning": "傷つける，害する"
  },
  {
    "word": "discover",
    "meaning": "知る，わかる"
  },
  {
    "word": "indicate",
    "meaning": "示す"
  },
  {
    "word": "overcome",
    "meaning": "克服する，打ち勝つ"
  },
  {
    "word": "protect",
    "meaning": "守る，保護する"
  },
  {
    "word": "remove",
    "meaning": "取り去る，移動させる"
  },
  {
    "word": "rely",
    "meaning": "当てにする，頼る"
  },
  {
    "word": "bother",
    "meaning": "わざわざ…する，悩ませる"
  },
  {
    "word": "seek",
    "meaning": "追い求める"
  },
  {
    "word": "matter",
    "meaning": "重要［問題］だ"
  },
  {
    "word": "concentrate",
    "meaning": "集中する，専念する"
  },
  {
    "word": "react",
    "meaning": "反応［対応］する"
  },
  {
    "word": "struggle",
    "meaning": "奮闘する"
  },
  {
    "word": "admit",
    "meaning": "（しぶしぶ）認める"
  },
  {
    "word": "lock",
    "meaning": "しまい込む，閉じ込める"
  },
  {
    "word": "issue",
    "meaning": "問題，問題点"
  },
  {
    "word": "relationship",
    "meaning": "関係"
  },
  {
    "word": "list",
    "meaning": "リスト，一覧"
  },
  {
    "word": "item",
    "meaning": "１品，１点"
  },
  {
    "word": "distance",
    "meaning": "距離"
  },
  {
    "word": "case",
    "meaning": "場合"
  },
  {
    "word": "opinion",
    "meaning": "意見，見解"
  },
  {
    "word": "century",
    "meaning": "世紀"
  },
  {
    "word": "trouble",
    "meaning": "困難，困ったこと"
  },
  {
    "word": "total",
    "meaning": "合計"
  },
  {
    "word": "advantage",
    "meaning": "有利な点，強み"
  },
  {
    "word": "detail",
    "meaning": "細部"
  },
  {
    "word": "moment",
    "meaning": "時点"
  },
  {
    "word": "bill",
    "meaning": "請求書"
  },
  {
    "word": "rest",
    "meaning": "残り，休み"
  },
  {
    "word": "deal",
    "meaning": "量，取引"
  },
  {
    "word": "feature",
    "meaning": "特徴"
  },
  {
    "word": "survey",
    "meaning": "調査"
  },
  {
    "word": "destination",
    "meaning": "目的地，行き先"
  },
  {
    "word": "conclusion",
    "meaning": "結論"
  },
  {
    "word": "attitude",
    "meaning": "態度，考え方"
  },
  {
    "word": "impact",
    "meaning": "影響，衝撃"
  },
  {
    "word": "source",
    "meaning": "源"
  },
  {
    "word": "row",
    "meaning": "列，並び"
  },
  {
    "word": "assistant",
    "meaning": "助手，補佐"
  },
  {
    "word": "impression",
    "meaning": "印象"
  },
  {
    "word": "noise",
    "meaning": "騒音"
  },
  {
    "word": "sign",
    "meaning": "兆し，表れ"
  },
  {
    "word": "aim",
    "meaning": "目的，目標"
  },
  {
    "word": "occasion",
    "meaning": "（特定の）時，機会"
  },
  {
    "word": "relation",
    "meaning": "関係，関連"
  },
  {
    "word": "signal",
    "meaning": "合図"
  },
  {
    "word": "balance",
    "meaning": "バランス，均衡"
  },
  {
    "word": "track",
    "meaning": "小道"
  },
  {
    "word": "symbol",
    "meaning": "象徴，シンボル"
  },
  {
    "word": "circle",
    "meaning": "円，仲間"
  },
  {
    "word": "leisure",
    "meaning": "余暇，自由な時間"
  },
  {
    "word": "angle",
    "meaning": "角度，観点"
  },
  {
    "word": "comfortable",
    "meaning": "快適な"
  },
  {
    "word": "recent",
    "meaning": "最近の"
  },
  {
    "word": "real",
    "meaning": "現実の，実在する"
  },
  {
    "word": "dangerous",
    "meaning": "危険な"
  },
  {
    "word": "current",
    "meaning": "現在の，今の"
  },
  {
    "word": "final",
    "meaning": "最後の"
  },
  {
    "word": "obvious",
    "meaning": "明らかな"
  },
  {
    "word": "fair",
    "meaning": "妥当な，適正な"
  },
  {
    "word": "proud",
    "meaning": "誇りに思って"
  },
  {
    "word": "anxious",
    "meaning": "切望して，心配して"
  },
  {
    "word": "impossible",
    "meaning": "不可能な"
  },
  {
    "word": "opposite",
    "meaning": "反対側の，向かい側の"
  },
  {
    "word": "terrible",
    "meaning": "ひどい，恐ろしい"
  },
  {
    "word": "thick",
    "meaning": "厚い"
  },
  {
    "word": "narrow",
    "meaning": "狭い，細い"
  },
  {
    "word": "actually",
    "meaning": "実際に，実は"
  },
  {
    "word": "especially",
    "meaning": "特に，とりわけ"
  },
  {
    "word": "perhaps",
    "meaning": "もしかしたら"
  },
  {
    "word": "fortunately",
    "meaning": "幸運にも"
  },
  {
    "word": "less",
    "meaning": "より少なく"
  },
  {
    "word": "least",
    "meaning": "最も〜でない"
  },
  {
    "word": "abroad",
    "meaning": "外国に［で］"
  },
  {
    "word": "overseas",
    "meaning": "海外へ［に，で］"
  },
  {
    "word": "rather",
    "meaning": "むしろ"
  },
  {
    "word": "probably",
    "meaning": "たぶん"
  },
  {
    "word": "easily",
    "meaning": "たやすく，簡単に"
  },
  {
    "word": "quite",
    "meaning": "かなり"
  },
  {
    "word": "exactly",
    "meaning": "正確に，まさに"
  },
  {
    "word": "instead",
    "meaning": "その代わりに"
  },
  {
    "word": "immediately",
    "meaning": "直ちに"
  },
  {
    "word": "somewhere",
    "meaning": "どこかに［へ，で］"
  },
  {
    "word": "gradually",
    "meaning": "徐々に，だんだんと"
  },
  {
    "word": "simply",
    "meaning": "単に"
  },
  {
    "word": "indeed",
    "meaning": "確かに，本当に"
  },
  {
    "word": "whether",
    "meaning": "…かどうか"
  },
  {
    "word": "also",
    "meaning": "その上"
  },
  {
    "word": "moreover",
    "meaning": "その上，さらに"
  },
  {
    "word": "besides",
    "meaning": "その上"
  },
  {
    "word": "though",
    "meaning": "でも，だけど"
  },
  {
    "word": "however",
    "meaning": "しかしながら"
  },
  {
    "word": "although",
    "meaning": "…だけれども，…にもかかわらず"
  },
  {
    "word": "true",
    "meaning": "本当の，真実の"
  },
  {
    "word": "because",
    "meaning": "なぜなら，…なので"
  },
  {
    "word": "therefore",
    "meaning": "したがって，それゆえ"
  },
  {
    "word": "anyway",
    "meaning": "いずれにせよ"
  },
  {
    "word": "bring about",
    "meaning": "〜を引き起こす，もたらす"
  },
  {
    "word": "catch up (with)",
    "meaning": "追いつく"
  },
  {
    "word": "check out",
    "meaning": "〜を調べる"
  },
  {
    "word": "deal with",
    "meaning": "〜に対処する，処理する"
  },
  {
    "word": "end up (-ing)",
    "meaning": "最終的には…することになる"
  },
  {
    "word": "figure out",
    "meaning": "〜を理解する，解決する"
  },
  {
    "word": "fill in",
    "meaning": "〜に記入する"
  },
  {
    "word": "get rid of",
    "meaning": "〜を処分する，取り除く"
  },
  {
    "word": "have A in common (with B)",
    "meaning": "（Bと）共通のAを持つ"
  },
  {
    "word": "keep up with",
    "meaning": "〜に（遅れずに）ついて行く"
  },
  {
    "word": "look to A (for B)",
    "meaning": "Aに（Bを）期待する，当てにする"
  },
  {
    "word": "make sense",
    "meaning": "意味をなす，理解しやすい"
  },
  {
    "word": "make sure",
    "meaning": "…を確かめる"
  },
  {
    "word": "make up for",
    "meaning": "〜の埋め合わせをする，〜を償う"
  },
  {
    "word": "make up one’s mind",
    "meaning": "決心する"
  },
  {
    "word": "never fail to",
    "meaning": "必ず…する"
  },
  {
    "word": "result in",
    "meaning": "〜という結果になる"
  },
  {
    "word": "set off (for)",
    "meaning": "出発する"
  },
  {
    "word": "set out to",
    "meaning": "…し始める，…しようと試みる"
  },
  {
    "word": "set up",
    "meaning": "〜を始める，設立する"
  },
  {
    "word": "stay up",
    "meaning": "（寝ないで）起きている"
  },
  {
    "word": "take advantage of",
    "meaning": "〜を利用する"
  },
  {
    "word": "take in",
    "meaning": "〜をだます"
  },
  {
    "word": "take over",
    "meaning": "〜を引き継ぐ"
  },
  {
    "word": "turn down",
    "meaning": "〜を拒む，断る"
  },
  {
    "word": "according to",
    "meaning": "〜によれば"
  },
  {
    "word": "at [from] a distance",
    "meaning": "離れた所に［から］"
  },
  {
    "word": "by means of",
    "meaning": "〜によって，〜を用いて"
  },
  {
    "word": "for a moment",
    "meaning": "少しの間"
  },
  {
    "word": "in a [one] sense",
    "meaning": "ある意味では"
  },
  {
    "word": "in case of",
    "meaning": "〜の場合は"
  },
  {
    "word": "in contrast to [with]",
    "meaning": "〜とは対照的に"
  },
  {
    "word": "in one’s opinion [view]",
    "meaning": "〜の考え［意見］では"
  },
  {
    "word": "in terms of",
    "meaning": "〜の観点から"
  },
  {
    "word": "instead of",
    "meaning": "〜の代わりに，〜ではなくて"
  },
  {
    "word": "next to",
    "meaning": "〜の隣に"
  },
  {
    "word": "no more than",
    "meaning": "わずか〜，たった〜"
  },
  {
    "word": "nothing but",
    "meaning": "ただ〜だけ"
  },
  {
    "word": "out of order",
    "meaning": "故障して，調子が悪い"
  },
  {
    "word": "regardless of",
    "meaning": "〜に関係なく，かまわず"
  },
  {
    "word": "to make matters worse",
    "meaning": "さらに悪いことに"
  },
  {
    "word": "with ease",
    "meaning": "容易に"
  },
  {
    "word": "a variety of",
    "meaning": "いろいろな"
  },
  {
    "word": "as ~ as possible [one can]",
    "meaning": "できるだけ"
  },
  {
    "word": "as if [though]",
    "meaning": "…であるかのように"
  },
  {
    "word": "by the time",
    "meaning": "…するまでに"
  },
  {
    "word": "even if",
    "meaning": "たとえ…だとしても"
  },
  {
    "word": "now (that)",
    "meaning": "今や…だから"
  },
  {
    "word": "the moment [minute]",
    "meaning": "…するとすぐに"
  },
  {
    "word": "by the way",
    "meaning": "ところで，それはそうと"
  },
  {
    "word": "as for",
    "meaning": "〜については，〜はどうかと言えば"
  },
  {
    "word": "in general",
    "meaning": "一般に，概して"
  },
  {
    "word": "on the whole",
    "meaning": "全体的に見て"
  },
  {
    "word": "for example [instance]",
    "meaning": "例えば"
  },
  {
    "word": "in particular",
    "meaning": "特に，とりわけ"
  },
  {
    "word": "that is (to say)",
    "meaning": "すなわち，より正確に言えば"
  },
  {
    "word": "in other words",
    "meaning": "言い換えると，つまり"
  },
  {
    "word": "to begin [start] with",
    "meaning": "まず第一に"
  },
  {
    "word": "in the first place",
    "meaning": "まず第一に"
  },
  {
    "word": "in addition",
    "meaning": "その上，さらに"
  },
  {
    "word": "A as well as B",
    "meaning": "BだけでなくAも"
  },
  {
    "word": "on the other hand",
    "meaning": "他方では"
  },
  {
    "word": "in spite of",
    "meaning": "〜にもかかわらず"
  },
  {
    "word": "because of",
    "meaning": "〜のために，〜が原因で"
  },
  {
    "word": "on account of",
    "meaning": "〜のために，〜が原因で"
  },
  {
    "word": "due to",
    "meaning": "〜のために，〜が原因で"
  },
  {
    "word": "thanks to",
    "meaning": "〜のおかげで"
  },
  {
    "word": "as a result",
    "meaning": "結果として"
  },
  {
    "word": "in any case [event]",
    "meaning": "いずれにしても"
  },
  {
    "word": "in short",
    "meaning": "要約すると，手短にいうと"
  }
];
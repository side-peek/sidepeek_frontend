export const DUMMY_PROJECT_DETAIL = {
  projects: [
    {
      // 개요
      id: "1",
      name: "사이드픽👀",
      subName: "요즘 사이드 플젝 뭐함? 사이드픽 👀",
      overview:
        "데브코스 5기 육개짱팀의 좌충우돌 우당탕탕 프로젝트 개발 일대기",
      thumbnailUrl:
        "https://user-images.githubusercontent.com/37354708/144370579-763a962c-5076-413c-9ea6-1043985791f6.png",
      githubUrl: "https://github.com/side-peek",
      deployUrl: "https://sidepeek.netlify.app/",
      viewCount: 20,
      likeCount: 7,
      commentCount: 2,

      // 기술 스택
      techStacks: [
        {
          name: "React",
          category: "프론트",
          iconImageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=webp&w=256",
        },
        {
          name: "Spring",
          category: "백",
          iconImageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-spring-16-283031.png?f=webp&w=256",
        },
        {
          name: "GitHub",
          category: "협업툴",
          iconImageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-github-1521500-1288242.png?f=webp&w=256",
        },
      ],

      // 프로젝트 기간
      startDate: "2024-01",
      endDate: "2024-03",

      // 팀원
      members: [
        {
          id: 1,
          nickname: "의진",
          profileImageUrl:
            "https://user-images.githubusercontent.com/37354708/144370579-763a962c-5076-413c-9ea6-1043985791f6.png",
          category: "백",
        },
        {
          id: 2,
          nickname: "동건",
          profileImageUrl:
            "https://user-images.githubusercontent.com/37354708/144370579-763a962c-5076-413c-9ea6-1043985791f6.png",
          category: "프론트",
        },
        {
          id: null,
          nickname: "민호",
          profileImageUrl: null,
          category: "프론트",
        },
      ],

      // 기능
      description:
        "# SidePeek ![License](https://img.shields.io/badge/license-MIT-blue) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)\n\n<img alt='Logo' align='right' src='https://user-images.githubusercontent.com/11501902/139942585-a6b044ce-3695-460a-91bd-dd9f1d4611c8.png' width='20%' />\n\nAn immersive remote-working platform - Winner of [2021 Monte Jade Innovation Competition](http://www.montejadese.org/pages/mjic.html)\n\n- Come try it out - [Official Website](https://skyoffice.netlify.app/)\n- Why we built this - [Concept Video](https://www.youtube.com/watch?v=BpDqGTPh8pc)\n\nSkyOffice works on all PC browsers (mobile browsers are currently not supported)\n\n## Built with\n\n- [Phaser3](https://github.com/photonstorm/phaser) - Game Engine\n- [Colyseus](https://github.com/colyseus/colyseus) - WebSocket-based Server Framework\n- [React/Redux](https://github.com/facebook/react) - Front-end Framework\n- [PeerJS](https://github.com/peers/peerjs) - WebRTC for Video/screen sharing\n- [TypeScript](https://github.com/microsoft/TypeScript) and [ES6](https://github.com/eslint/eslint) - for both client and server sides\n\n## Features\n\n### Proximity Chat (distance-based interactive system)\n\n![image](https://user-images.githubusercontent.com/11501902/139960852-cf0e0883-8fbe-459d-bb11-3707d0ae1360.png)\n\n### Multifunctional Rooms\n\n![image](https://user-images.githubusercontent.com/11501902/139961091-1801bd4d-fbd6-4400-8503-85ece744e979.png)\n\n### Flexible & Immediate Screen Sharing\n\n![image](https://user-images.githubusercontent.com/11501902/139961155-44a85cd9-ac25-4563-9d82-6537ed7435f6.png)\n\n## Controls\n\n- `arrow keys` to move (video chat will start if you are close to someone else)\n- `E` to sit down\n- `R` to use computer (for screen sharing)\n\n## Prerequisites\n\nYou'll need [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/) installed.\n\n## Getting Started\n\nClone this repository to your local machine:\n\n```bash\ngit clone https://github.com/kevinshen56714/SkyOffice.git\n```\n\nThis will create a folder named `SkyOffice`. You can specify a different folder name like this:\n\n```bash\ngit clone https://github.com/kevinshen56714/SkyOffice.git my-folder-name\n```\n\nTo start a server, go into the project folder and install dependencies/run start command:\n\n```bash\ncd SkyOffice or 'my-folder-name'\nnpm install && npm run start\n```\n\nTo start a client, go into the client folder and install dependencies/run start command:\n\n```bash\ncd SkyOffice/client or 'my-folder-name/client'\nnpm install && npm run start\n```\n\n## Credits 🎉\n\nBig thanks to this great repo:\nhttps://github.com/ourcade/phaser3-typescript-parcel-template\n\n## License\n\n[MIT License](https://github.com/kevinshen56714/SkyOffice/blob/master/LICENSE)\n",

      // 트러블 슈팅
      troubleShooting:
        "# SidePeek ![License](https://img.shields.io/badge/license-MIT-blue) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)\n\n<img alt='Logo' align='right' src='https://user-images.githubusercontent.com/11501902/139942585-a6b044ce-3695-460a-91bd-dd9f1d4611c8.png' width='20%' />\n\nAn immersive remote-working platform - Winner of [2021 Monte Jade Innovation Competition](http://www.montejadese.org/pages/mjic.html)\n\n- Come try it out - [Official Website](https://skyoffice.netlify.app/)\n- Why we built this - [Concept Video](https://www.youtube.com/watch?v=BpDqGTPh8pc)\n\nSkyOffice works on all PC browsers (mobile browsers are currently not supported)\n\n## Built with\n\n- [Phaser3](https://github.com/photonstorm/phaser) - Game Engine\n- [Colyseus](https://github.com/colyseus/colyseus) - WebSocket-based Server Framework\n- [React/Redux](https://github.com/facebook/react) - Front-end Framework\n- [PeerJS](https://github.com/peers/peerjs) - WebRTC for Video/screen sharing\n- [TypeScript](https://github.com/microsoft/TypeScript) and [ES6](https://github.com/eslint/eslint) - for both client and server sides\n\n## Features\n\n### Proximity Chat (distance-based interactive system)\n\n![image](https://user-images.githubusercontent.com/11501902/139960852-cf0e0883-8fbe-459d-bb11-3707d0ae1360.png)\n\n### Multifunctional Rooms\n\n![image](https://user-images.githubusercontent.com/11501902/139961091-1801bd4d-fbd6-4400-8503-85ece744e979.png)\n\n### Flexible & Immediate Screen Sharing\n\n![image](https://user-images.githubusercontent.com/11501902/139961155-44a85cd9-ac25-4563-9d82-6537ed7435f6.png)\n\n## Controls\n\n- `arrow keys` to move (video chat will start if you are close to someone else)\n- `E` to sit down\n- `R` to use computer (for screen sharing)\n\n## Prerequisites\n\nYou'll need [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/) installed.\n\n## Getting Started\n\nClone this repository to your local machine:\n\n```bash\ngit clone https://github.com/kevinshen56714/SkyOffice.git\n```\n\nThis will create a folder named `SkyOffice`. You can specify a different folder name like this:\n\n```bash\ngit clone https://github.com/kevinshen56714/SkyOffice.git my-folder-name\n```\n\nTo start a server, go into the project folder and install dependencies/run start command:\n\n```bash\ncd SkyOffice or 'my-folder-name'\nnpm install && npm run start\n```\n\nTo start a client, go into the client folder and install dependencies/run start command:\n\n```bash\ncd SkyOffice/client or 'my-folder-name/client'\nnpm install && npm run start\n```\n\n## Credits 🎉\n\nBig thanks to this great repo:\nhttps://github.com/ourcade/phaser3-typescript-parcel-template\n\n## License\n\n[MIT License](https://github.com/kevinshen56714/SkyOffice/blob/master/LICENSE)\n",
    },
  ],
}

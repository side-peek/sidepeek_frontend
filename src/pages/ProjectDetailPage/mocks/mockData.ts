export const DUMMY_PROJECT_DETAIL = {
  id: 32,
  name: "사이드픽👀",
  subName: "좋은 아이디어? 사이드픽에서 찾아봐!",
  overview: "사이드 프로젝트를 공유하는 사이드픽입니다.",
  thumbnailUrl: "https://sidepeek.image/imageeUrl",
  overviewImageUrl: [
    {
      id: 4,
      url: "https://sidepeek.image/img1.jpg",
    },
  ],
  githubUrl: "https://github.com/side-peek",
  deployUrl: "https://www.sidepeek.com",
  viewCount: 1,
  likeCount: 0,
  commentCount: 0,
  techStacks: [
    {
      category: "백엔드",
      skill: [
        {
          id: 16,
          name: "Spring",
          iconImageUrl:
            "https://sidepeek-bucket.s3.ap-northeast-2.amazonaws.com/skill/spring-icon.png",
        },
      ],
    },
    {
      category: "프론트엔드",
      skill: [
        {
          id: 14,
          name: "React",
          iconImageUrl:
            "https://sidepeek-bucket.s3.ap-northeast-2.amazonaws.com/skill/react.png",
        },
      ],
    },
    {
      category: "인프라",
      skill: [
        {
          id: 1,
          name: "AWS EC2",
          iconImageUrl:
            "https://sidepeek-bucket.s3.ap-northeast-2.amazonaws.com/skill/aws-ec2.png",
        },
        {
          id: 2,
          name: "AWS RDS",
          iconImageUrl:
            "https://sidepeek-bucket.s3.ap-northeast-2.amazonaws.com/skill/aws-rds.png",
        },
      ],
    },
  ],
  startDate: "2024-02",
  endDate: "2024-03",
  ownerId: 8,
  members: [
    {
      role: "프론트엔드",
      userSummary: [
        {
          id: 7,
          nickname: "종혁",
          profileImageUrl:
            "https://user-images.githubusercontent.com/jonghk.png",
        },
      ],
    },
    {
      role: "백엔드",
      userSummary: [
        {
          id: 8,
          nickname: "예림",
          profileImageUrl: "https://user-images.githubusercontent.com/yen.png",
        },
        {
          id: 1,
          nickname: "의진",
          profileImageUrl:
            "https://user-images.githubusercontent.com/uijin.png",
        },
      ],
    },
  ],
  description: "## 사이드픽 기능 설명 Markdown",
  troubleShooting: "## 사이드픽 트러블 슈팅 Markdown",
  comments: [
    {
      id: 1,
      user: {
        id: 3,
        nickname: "세희",
        profileImageUrl: "https://user-images.githubusercontent.com/hailey.png",
      },
      isOwner: false,
      isAnonymous: false,
      content: "우와 이 프로젝트 대박인데요?",
      createdAt: "2024-03-02 20:17:00",
      replies: [
        {
          id: 3,
          parentId: 1,
          user: {
            id: 1,
            nickname: "의진",
            profileImageUrl:
              "https://user-images.githubusercontent.com/uijin.png",
          },
          isOwner: true,
          isAnonymous: false,
          content: "좋게 봐주셔서 감사합니다!",
          createdAt: "2024-12-12 10:12:00",
        },
      ],
    },
    {
      id: 2,
      user: null,
      isOwner: false,
      isAnonymous: true,
      content: "LGTM ✨💖",
      createdAt: "2024-12-12 10:12:00",
    },
  ],
  likeId: null,
}

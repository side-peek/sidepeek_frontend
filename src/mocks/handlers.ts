import { rest } from 'msw'

export const handlers = [
  rest.get('/api/v1/skills', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        skills: [
          {
            id: 2,
            name: 'spring',
            iconImageUrl: 'https://www.iconimageurl.com',
          },
          {
            id: 3,
            name: 'swift',
            iconImageUrl: 'https://www.iconimageurl.com',
          },
        ],
      }),
    )
  }),
  rest.get('api/v1/project', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          projects: [
            {
              // 개요
              id: '1',
              name: '사이드픽👀',
              subName: '요즘 사이드 플젝 뭐함? 사이드픽 👀',
              overview:
                '데브코스 5기 육개짱팀의 좌충우돌 우당탕탕 프로젝트 개발 일대기',
              thumbnailUrl:
                'https://user-images.githubusercontent.com/37354708/144370579-763a962c-5076-413c-9ea6-1043985791f6.png',
              overviewImageUrl: [
                {
                  id: 1,
                  imageUrl: 'https://project-images.sidepeek.com/1.png',
                },
                {
                  id: 2,
                  imageUrl: 'https://project-images.sidepeek.com/2.png',
                },
              ],
              githubUrl: 'https://github.com/side-peek',
              deployUrl: 'https://sidepeek.netlify.app/',
              viewCount: 20,
              likeCount: 7,

              // 기술 스택
              techStacks: [
                {
                  id: 21,
                  category: '프론트',
                  skill: {
                    id: 1,
                    name: 'React',
                    iconImageUrl:
                      'https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=webp&w=256',
                  },
                },
                {
                  id: 22,
                  category: '백',
                  skill: {
                    id: 2,
                    name: 'Spring',
                    iconImageUrl:
                      'https://cdn.iconscout.com/icon/free/png-512/free-spring-16-283031.png?f=webp&w=256',
                  },
                },
                {
                  id: 23,
                  category: '협업툴',
                  skill: {
                    id: 3,
                    name: 'GitHub',
                    iconImageUrl:
                      'https://cdn.iconscout.com/icon/free/png-512/free-spring-16-283031.png?f=webp&w=256',
                  },
                },
                {
                  id: 24,
                  category: '프론트',
                  skill: {
                    id: 4,
                    name: 'React Query',
                    iconImageUrl:
                      'https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=webp&w=256',
                  },
                },
              ],

              // 프로젝트 기간
              startDate: '2024-01',
              endDate: '2024-03',

              // 팀원
              // ownerId: 프로젝트 게시글의 작성자
              ownerId: 1,
              members: [
                {
                  id: 1,
                  category: '백',
                  userSummary: {
                    id: 1,
                    nickname: '의진',
                    profileImageUrl:
                      'https://user-images.githubusercontent.com/37354708/144370579-763a962c-5076-413c-9ea6-1043985791f6.png',
                  },
                },
                {
                  id: 2,
                  category: '프론트',
                  userSummary: {
                    id: 2,
                    nickname: '동건',
                    profileImageUrl:
                      'https://user-images.githubusercontent.com/37354708/144370579-763a962c-5076-413c-9ea6-1043985791f6.png',
                  },
                },
                // 비회원
                {
                  id: 3,
                  category: '프론트',
                  userSummary: {
                    id: null,
                    nickname: '민호',
                    profileImageUrl: null,
                  },
                },
              ],

              // 기능
              description:
                'Write\nPreview\n\nMarkdown\n\n## ff\n\n# 황민호\nWYSIWYG',
              // 트러블 슈팅
              troubleShooting:
                '# 황면호\n\n## 황민호\n\n<img src="https://velog.velcdn.com/images/gnsdh8616/post/c873ae51-8408-4447-a46e-703d0b0ed744/image.gif" width="500" />\n```\n코드블록\n```',
            },
          ],
        },
      }),
    )
  }),
]

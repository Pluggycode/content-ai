export default[
    {
        name:'Blog Title',
        desc:'An AI tool that generate blog title depends on your blog information',
        category: 'blog',
        icons:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        slug:'generate-blog-title',
        aiPrompt:'give me 5 bolg topic idea in a bullet point only',
        form: [
            {
                label:"Enter your blog niche",
                field:'input',
                name:'title',
                required:true
            },
            {
                label:'enter blog outline',
                field:'textarea',
                name:'outline'
            }
        ]
    },
    {
        name:'Blog topic ides',
        desc:'An AI tool that generate blog title depends on your blog information',
        category: 'blog',
        icons:'https://cdn-icons-png.flaticon.com/128/9743/9743121.png',
        slug:'blog-topic-ideas',
        aiPrompt:'give me 5 bolg topic idea in a bullet point only based on given niche & outline topic and give me reason in Rich text editor in rich text editor format',
        form: [
            {
                label:"Enter your blog niche",
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'enter blog outline',
                field:'textarea',
                name:'outline'
            }
        ]
    },
    {
        name:'Youtube SEO Title',
        desc:'An AI tool that generate blog title depends on your blog information',
        category: 'blog',
        icons:'https://cdn-icons-png.flaticon.com/128/16393/16393962.png',
        slug:'youtube-seo-title',
        aiPrompt:'give me best SEO optimised high ranked 5 title for youtube seo',
        form: [
            {
                label:"enter your youtube video topic",
                field:'input',
                name:'keywords',
                required:true
            },
            {
                label:'enter blog outline',
                field:'textarea',
                name:'outline'
            }
        ]
    },
    {
        name:'Youtube Description',
        desc:'An AI tool that generate blog title depends on your youtube description',
        category: 'blog',
        icons:'https://cdn-icons-png.flaticon.com/128/10125/10125431.png',
        slug:'Youtube-description',
        aiPrompt:'give me 5 bolg topic idea in a bullet wise only based on given niche & outline topic and give me reason in Rich text editor in rich text editor format',
        form: [
            {
                label:"Enter your blog niche",
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'enter blog outline',
                field:'textarea',
                name:'outline'
            }
        ]
    },
    
]
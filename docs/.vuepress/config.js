module.exports = {
    title: '我的笔记',
    description: '笔记',
    themeConfig: {
        sidebar: 'auto',
        nav: [
            { text: 'js', link: '/js_note' },
            {
                text: 'react', 
                items: [
                    { text: 'react', link: '/react_note' },
                    { text: 'react扩展', link: '/react_kz' }
                ]
            },
        ]
    }
}
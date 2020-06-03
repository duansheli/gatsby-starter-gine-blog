module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/5df3c94eada5444e9ac89e86f03895a7?v=ff92116a0b614d95a25e9face10f0477"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/6bcb8ecacf04499694e36162685ec390?v=2f5d34fc96654674a01c257de7f71df6"
            }
        }
    ],
}

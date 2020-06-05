module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/2e4bd0e4492f49a193356dd84b76a6b4?v=21b5e89062c04359ac8d24145a235ea3"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/9be3cb4f041442d2a9a2f025d15eb9c1?v=b2dcd242b0a4453e8f538c2f843f8a02"
            }
        }
    ],
}

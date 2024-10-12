// const url = "http://localhost:9999/api"
const url = "http://api.liuyuyang.net/api"

export default async <T>(method: string, api: string, data?: any, caching = true) => {
    const res = await fetch(`${url}${api}`, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        [method === "POST" ? "body" : ""]: JSON.stringify(data ? data : {}),
        // // 配置默认缓存时间，1小时内重复访问不会重新请求接口
        // next: { revalidate: caching ? 3600 : 0 }

        // 不开启缓存
        next: { revalidate: 0 }
    })

    return res.json() as Promise<Response<T>>;
}
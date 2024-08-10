export function middleware() {
    return Response.json({
        msg: 'hello there',
    });
}

export const config = {
    matcher: '/about',
};

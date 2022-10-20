const modules = import.meta.glob('../canvas/**/index.tsx')
let dirsPath: string[] = []

Object.entries(modules).map(([path, element], i) => {
    let dirs = path.replace(/(^\.\.\/|canvas|\/index\.tsx$)/g, '')
    dirs == "" ? dirs = '/' : ""
    dirsPath.push(dirs)
})
export {
    dirsPath
}
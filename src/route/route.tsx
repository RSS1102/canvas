const modules = import.meta.glob('./canvas/**/index.tsx')
console.log(modules)
for (const path in modules) {
    modules[path]().then((mod) => {
        console.log(path, mod)
    })
}

const route = () => {
    return (<>
        <div>1</div>
    </>)
}
export default route
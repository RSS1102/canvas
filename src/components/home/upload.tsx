export const UpLoad = (props: { getImgDate: any }) => {
    const { getImgDate } = props

    const onChange = (e: any) => {
        const file = e?.target?.files[0]
        if (!file) throw ('请选择图片')
        const imageToBase64 = (img: Blob) => {
            const reader = new FileReader();
            reader.readAsDataURL(img); //转化二进制流，异步方法
            reader.onload = (e) => {
                getImgDate(e.target!.result as string)
            };
        };
        if (file.type === "image/png" ||
            file.type === "image/jpeg" ||
            file.type === "image/jpg") {
            imageToBase64(file)
        } else {
            throw ('请选择正确的图片类型')
        }
    }
    return (
        <>
            <input type='file' onChange={onChange}></input>
        </>
    )
}
const getDataFormLocalStorage = () => {
    const myData = JSON.parse(localStorage.getItem("job-application")) || [];
    return myData;
}

const saveDataToLocalStorage = (id, toast) => {
    const application = getDataFormLocalStorage();
    const isExist = application.includes(id);
    if (!isExist) {
        application.push(id);
        localStorage.setItem("job-application", JSON.stringify(application))
        toast.success("Item add Successfully")
    } else {
        toast.error("Item already exist")
    }

    // return application

}
export { getDataFormLocalStorage, saveDataToLocalStorage };
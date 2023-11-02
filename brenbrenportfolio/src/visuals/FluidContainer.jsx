export default function FluidContainer(props) {
    return (
        <div className = "container-fluid pt-3 d-flex justify-content-end">{ props.children }</div>
    )
}
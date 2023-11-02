import 'bootstrap/dist/css/bootstrap.min.css';

export default function FluidContainer(props) {
    return (
        <div className = "container-fluid d-flex justify-content-end">{ props.children }</div>
    )
}
import './CampoTexto.css';

export const CampoTexto = (props) => {
    return (
        <div className='form-campo-texto'>   
            <div className='campo-texto'>
                <label>{props.label}</label>
                <input required={props.obrigatorio} placeholder={props.placeholder}/>
            </div>
        </div>
            
    )
}
export default CampoTexto
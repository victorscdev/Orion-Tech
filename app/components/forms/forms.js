export function HTML__form_control(props) {
    const FORM__control = `
        <div class="FORM__control">
            <label for="${ props.for }">${ props.label }</label>
            <input name="${ props.for }" type="${ props.type }">
        </div>
    `;
    
    return FORM__control
}
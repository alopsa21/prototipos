export class Saludo {
    id: number;
    title: string = '';
    seleccionado: boolean = false;
    idioma: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

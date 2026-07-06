export interface FieldTextareaProps{

label?:string;

placeholder?:string;

value?:string;

rows?:number;

maxLength?:number;

onChange?:
(e:React.ChangeEvent<HTMLTextAreaElement>)=>void;

className?:string;

style?:React.CSSProperties;

}
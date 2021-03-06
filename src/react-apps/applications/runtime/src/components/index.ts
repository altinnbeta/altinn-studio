import { AddressComponent } from './advanced/AddressComponent';
import { CheckboxContainerComponent } from './base/CheckboxesContainerComponent';
import { DatepickerComponent } from './base/DatepickerComponent';
import { DropdownComponent } from './base/DropdownComponent';
import { FileUploadComponent } from './base/FileUploadComponent';
import { HeaderComponent } from './base/HeaderComponent';
import { InputComponent } from './base/InputComponent';
import { ParagraphComponent } from './base/ParagraphComponent';
import { RadioButtonContainerComponent } from './base/RadioButtonsContainerComponent';
import { TextAreaComponent } from './base/TextAreaComponent';
import { SubmitComponent } from './widget/SubmitComponent';

export interface IComponent {
  name: string;
  Tag: any;
  Type: ComponentTypes;
  customProperties?: any;
}

// The order here should be the same as
// the exported 'components' list (drag and drop)
export enum ComponentTypes {
  Header,
  Paragraph,
  Input,
  Datepicker,
  DropDown,
  CheckBox,
  RadioButton,
  TextArea,
  FileUpload,
  Submit,
  Container,
  AddressComponent,
}

export const textComponents: IComponent[] = [
  {
    name: 'Header',
    Tag: HeaderComponent,
    Type: ComponentTypes.Header,
  },
  {
    name: 'Paragraph',
    Tag: ParagraphComponent,
    Type: ComponentTypes.Paragraph,
  },
];

export const schemaComponents: IComponent[] = [
  {
    name: 'Input',
    Tag: InputComponent,
    Type: ComponentTypes.Input,
  },
  {
    name: 'Datepicker',
    Tag: DatepickerComponent,
    Type: ComponentTypes.Datepicker,
  },
  {
    name: 'Dropdown',
    Tag: DropdownComponent,
    Type: ComponentTypes.DropDown,
    customProperties: {
      options: [],
    },
  },
  {
    name: 'Checkboxes',
    Tag: CheckboxContainerComponent,
    Type: ComponentTypes.CheckBox,
    customProperties: {
      options: [],
    },
  },
  {
    name: 'RadioButtons',
    Tag: RadioButtonContainerComponent,
    Type: ComponentTypes.RadioButton,
    customProperties: {
      options: [],
    },
  },
  {
    name: 'TextArea',
    Tag: TextAreaComponent,
    Type: ComponentTypes.TextArea,
  },
  {
    name: 'FileUpload',
    Tag: FileUploadComponent,
    Type: ComponentTypes.FileUpload,
  },
  {
    name: 'Submit',
    Tag: SubmitComponent,
    Type: ComponentTypes.Submit,
    customProperties: {
      textResourceId: 'Standard.Button.Submit',
      customType: 'Standard',
    },
  },
];

export const advancedComponents: IComponent[] = [
  {
    name: 'AddressComponent',
    Tag: AddressComponent,
    Type: ComponentTypes.AddressComponent,
    customProperties: {
      simplified: true,
    },
  },
];

const components: IComponent[] = textComponents.concat(schemaComponents, advancedComponents);

export default components;

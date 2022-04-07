import { DefaultTheme } from 'styled-components';


declare module "styled-components" {
    export interface DefaultTheme {
        primaryColor: string;
        secondaryColor: string;
        secondaryActiveColor: string;
        backgroundColor: string;
        blackColor:  string;
        whiteColor:  string;
        greyColor:  string;
        borderColor:  string;
        textColor:  string;
        tittleColor:  string;
        successColor:  string;
        dangerColor:  string;
    }
}

export const lightTheme: DefaultTheme = {
    primaryColor: "#015A8A",
    secondaryColor: "#06936E",
    secondaryActiveColor: "#25AFA0",
    backgroundColor: "#F6F6F6",
    blackColor:  '#000000',
    whiteColor:  '#ffffff',
    greyColor:  '#F9F9F9',
    borderColor:  '#ededed',
    textColor:  '#ADADAD',
    tittleColor:  '#646464',
    successColor:  '#0DB030',
    dangerColor:  '#FEBF28',
};
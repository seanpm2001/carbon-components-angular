// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CaretUp16Module } from "@carbon/icons-angular/lib/caret--up/16";
import { CaretDown16Module } from "@carbon/icons-angular/lib/caret--down/16";
import { WarningFilled16Module } from "@carbon/icons-angular/lib/warning--filled/16";

// imports
import { Number } from "./number.component";
import { I18nModule } from "../i18n/i18n.module";

@NgModule({
	declarations: [
		Number
	],
	exports: [
		Number
	],
	imports: [
		FormsModule,
		CommonModule,
		CaretUp16Module,
		CaretDown16Module,
		I18nModule,
		WarningFilled16Module
	]
})
export class NumberModule { }

export { Number };

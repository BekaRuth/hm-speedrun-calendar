import { Component } from '@angular/core';
import { ReferenceDataService } from './services/referenceDataService';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public npcInfo;
    public currentDay = 3;
    public totalDays = 0;
    public currentSeason = 'Spring';
    public dayOfWeek = 'Wednesday';
    public currentYear = 1;
    public selectedNPCs = new Array<Person>();

    constructor(private referenceDataService: ReferenceDataService) {
        this.npcInfo = this.referenceDataService.getNPCS();
        this.getSchedules();
    }

    public advanceDay() {
        this.currentDay++;
        this.totalDays++;
        if (this.currentDay > 30) {
            this.currentDay = 1;
            this.advanceSeason();
        }
        this.setDayOfWeek();
        this.getSchedules();
    }

    public advanceSeason() {
        switch (this.currentSeason) {
            case ('Spring'):
                this.currentSeason = 'Summer';
                break;
            case ('Summer'):
                this.currentSeason = 'Fall';
                break;
            case ('Fall'):
                this.currentSeason = 'Winter';
                break;
            case ('Winter'):
                this.currentSeason = 'Spring';
                this.currentYear++;
                break;
        }
    }

    public setDayOfWeek() {
        let day = this.totalDays % 7;
        switch (day) {
            case (0):
                this.dayOfWeek = 'Wednesday';
                break;
            case (1):
                this.dayOfWeek = 'Thursday';
                break;
            case (2):
                this.dayOfWeek = 'Friday';
                break;
            case (3):
                this.dayOfWeek = 'Saturday';
                break;
            case (4):
                this.dayOfWeek = 'Sunday';
                break;
            case (5):
                this.dayOfWeek = 'Monday';
                break;
            case (6):
                this.dayOfWeek = 'Tuesday';
                break;
        }
    }

    public addNPC(id: number) {
        for (let i = 0; i < this.npcInfo.length; i++) {
            if (this.npcInfo[i].id === id) {
                this.selectedNPCs.push(this.npcInfo[i]);
            }
        }
    }

    public getSchedules() {
        if (this.selectedNPCs.some(e => e.id === 1)) {
            this.getAnnSchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 2)) {
            this.getElliSchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 3)) {
            this.getKarenSchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 4)) {
            this.getMariaSchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 5)) {
            this.getPopuriSchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 6)) {
            this.getRickSchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 7)) {
            this.getCliffSchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 8)) {
            this.getKaiSchedule();
        }
    }

    public getAnnSchedule() {
        if (this.dayOfWeek === 'Sunday') {
            this.npcInfo[0].today = this.npcInfo[0].schedule[0];
        }
        else if (this.dayOfWeek === 'Thursday') {
            this.npcInfo[0].today = this.npcInfo[0].schedule[2];
        }
        else {
            this.npcInfo[0].today = this.npcInfo[0].schedule[1];
        }
    }

    public getElliSchedule() {
        if (this.dayOfWeek === 'Monday') {
            if (this.currentSeason === 'Summer') {
                this.npcInfo[1].today = this.npcInfo[1].schedule[3];
            }
            else {
                this.npcInfo[1].today = this.npcInfo[1].schedule[2];
            }
        }
        else if (this.dayOfWeek === 'Sunday') {
            this.npcInfo[1].today = this.npcInfo[1].schedule[4];
        }
        else if (this.dayOfWeek === 'Wednesday') {
            this.npcInfo[1].today = this.npcInfo[1].schedule[0];
        }
        else {
            this.npcInfo[1].today = this.npcInfo[1].schedule[1];
        }
    }

    public getKarenSchedule() {
        if (['Monday', 'Thursday'].includes(this.dayOfWeek)) {
            this.npcInfo[2].today = this.npcInfo[2].schedule[0];
        }
        else if ([this.dayOfWeek === 'Sunday']) {
            this.npcInfo[2].today = this.npcInfo[2].schedule[1];
        }
        else if (['Friday', 'Saturday'].includes(this.dayOfWeek)) {
            this.npcInfo[2].today = this.npcInfo[2].schedule[2];
        }
        else {
            this.npcInfo[2].today = this.npcInfo[2].schedule[3];
        }
    }

    public getMariaSchedule() {
        if (this.currentSeason === 'Summer' && this.currentDay < 11) {
            this.npcInfo[3].today = this.npcInfo[3].schedule[2];
        }
        else if (this.currentSeason === 'Summer' && this.currentDay < 11) {
            this.npcInfo[3].today = this.npcInfo[3].schedule[3];
        }
        else if (this.dayOfWeek === 'Monday') {
            this.npcInfo[3].today = this.npcInfo[3].schedule[1];
        }
        else {
            this.npcInfo[3].today = this.npcInfo[3].schedule[0];
        }
    }

    public getPopuriSchedule() {
        if (this.dayOfWeek === 'Friday') {
            this.npcInfo[4].today = this.npcInfo[4].schedule[1];
        }
        else if (this.dayOfWeek === 'Saturday') {
            this.npcInfo[4].today = this.npcInfo[4].schedule[2];
        }
        else if (this.dayOfWeek === 'Sunday') {
            this.npcInfo[4].today = this.npcInfo[4].schedule[3];
        }
        else {
            this.npcInfo[4].today = this.npcInfo[4].schedule[0];
        }
    }

    public getRickSchedule() {
        if (this.dayOfWeek === 'Wednesday') {
            this.npcInfo[5].today = this.npcInfo[5].schedule[3];
        }
        else if (this.dayOfWeek === 'Saturday') {
            this.npcInfo[5].today = this.npcInfo[5].schedule[1];
        }
        else if (this.dayOfWeek === 'Sunday') {
            this.npcInfo[5].today = this.npcInfo[5].schedule[2];
        }
        else {
            this.npcInfo[5].today = this.npcInfo[5].schedule[0];
        }
    }
  
    public getCliffSchedule() {
        if (this.dayOfWeek === 'Monday') {
            this.npcInfo[6].today = this.npcInfo[6].schedule[0];
        }
        else if (this.dayOfWeek === 'Tuesday') {
            this.npcInfo[6].today = this.npcInfo[6].schedule[1];
        }
        else if (this.dayOfWeek === 'Wednesday') {
            this.npcInfo[6].today = this.npcInfo[6].schedule[2];
        }
        else if (this.dayOfWeek === 'Thursday') {
            this.npcInfo[6].today = this.npcInfo[6].schedule[3];
        }
        else if (['Friday', 'Saturday'].includes(this.dayOfWeek)) {
            this.npcInfo[6].today = this.npcInfo[6].schedule[4];
        }
        else if (this.dayOfWeek === 'Sunday') {
            this.npcInfo[6].today = this.npcInfo[6].schedule[5];
        }
    }
  
      public getKaiSchedule() {
        if (this.dayOfWeek === 'Sunday') {
            this.npcInfo[7].today = this.npcInfo[7].schedule[1];
        }
        else if (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].includes(this.dayOfWeek)) {
            this.npcInfo[7].today = this.npcInfo[7].schedule[0];
        }
        else if (this.currentSeason === 'Winter' && this.dayOfWeek === 'Sunday') {
            this.npcInfo[7].today = this.npcInfo[7].schedule[3];
        }
        else if (this.currentSeason === 'Winter' && ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].includes(this.dayOfWeek)) {
            this.npcInfo[7].today = this.npcInfo[7].schedule[2];
        }
    }
}

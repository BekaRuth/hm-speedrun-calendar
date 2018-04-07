import { Component } from '@angular/core';
import { ReferenceDataService } from './services/referenceDataService';
import { Person } from './models/person';
import { Festival } from './models/festival';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public npcInfo; // This will store all of the NPC info from the ReferenceDataService
    public festivalInfo; // This will store all of the Festival info from the ReferenceDataService
    public currentDay = 3; // This will range from 1-30. Starts on 3 because the game starts on Spring 3rd
    public totalDays = 0; // This will track total number of days played. Will be used to track what day of the week it is
    public currentSeason = 'Spring'; // Will be 'Spring', 'Summer', 'Fall', or 'Winter'. Game starts on 'Spring'
    public dayOfWeek = 'Wednesday'; // Used to track the day of the week. Game starts on 'Wednesday'
    public currentYear = 1; // Tracks what year the player is on
    public selectedNPCs = new Array<Person>(); // An array of the NPCs which have been selected
    public todayFestival: Festival;
    public trackFestivals: boolean = true;

    constructor(private referenceDataService: ReferenceDataService) {
        this.npcInfo = this.referenceDataService.getNPCS();
        this.festivalInfo = this.referenceDataService.getFestivals();
        this.getSchedules();
    }

    // Called when the sleep button is pressed
    public advanceDay() {
        this.currentDay++;
        this.totalDays++;
        if (this.currentDay > 30) { // Once the currentDay is at 31, it needs to be set to 1 and the season should advance
            this.currentDay = 1;
            this.advanceSeason();
        }
        this.setDayOfWeek();
        this.getSchedules();
        this.checkFestival();
    }

    // Changes the current season to the next season
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
                this.currentYear++; // Need to increase the year at the end of winter
                break;
        }
    }

    // Sets the day of the week based off of total days played
    public setDayOfWeek() {
        let day = this.totalDays % 7; // Modulo Operator. Fun stuff.
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

    // Called when an NPC is selected from the dropdown. Adds NPC to selectedNPCs
    public addNPC(id: number) {
        for (let i = 0; i < this.npcInfo.length; i++) {
            if (this.npcInfo[i].id === id) {
                this.selectedNPCs.push(this.npcInfo[i])
            }
        }
        this.getSchedules();
    }

    // Called when minus button is clicked. Removes the NPC from the list
    public removeNPC(index: number) {
        this.selectedNPCs.splice(index, 1);
    }

    // Checks if the day is a festival
    public checkFestival() {
        this.todayFestival = null;
        if (this.currentSeason === 'Spring') {
            if (this.currentDay === 1) {
                this.todayFestival = this.festivalInfo[0];
            }
            if (this.currentDay === 8) {
                this.todayFestival = this.festivalInfo[1];
            }
            if (this.currentDay === 17) {
                this.todayFestival = this.festivalInfo[2];
            }
            if (this.currentDay === 18 && this.currentYear === 1) {
                this.todayFestival = this.festivalInfo[3];
            }
            if ([19, 20, 21, 22].includes(this.currentDay)) {
                this.todayFestival = this.festivalInfo[4];
            }
            if (this.currentDay === 23) {
                this.todayFestival = this.festivalInfo[5];
            }
        }
        if (this.currentSeason === 'Summer') {
            if (this.currentDay === 1 && this.currentYear === 3) {
                this.todayFestival = this.festivalInfo[6];
            }
            if (this.currentDay === 1) {
                this.todayFestival = this.festivalInfo[7];
            }
            if (this.currentDay === 9) {
                this.todayFestival = this.festivalInfo[8];
            }
            if (this.currentDay === 17) {
                this.todayFestival = this.festivalInfo[9];
            }
            if (this.currentDay === 24) {
                this.todayFestival = this.festivalInfo[10];
            }
        }
        if (this.currentSeason === 'Fall') {
            if (this.currentDay === 4) {
                this.todayFestival = this.festivalInfo[11];
            }
            if (this.currentDay === 12) {
                this.todayFestival = this.festivalInfo[12];
            }
            if (this.currentDay === 20) {
                this.todayFestival = this.festivalInfo[13];
            }
            if ([23, 24, 25, 26, 27].includes(this.currentDay) && this.currentYear === 1) {
                this.todayFestival = this.festivalInfo[14];
            }
            if (this.currentDay === 28) {
                this.todayFestival = this.festivalInfo[15];
            }
            if (this.currentDay === 30 && this.currentYear === 1) {
                this.todayFestival = this.festivalInfo[16];
            }
        }
        if (this.currentSeason === 'Winter') {
            if (this.currentDay === 10) {
                this.todayFestival = this.festivalInfo[17];
            }
            if ([12 ,13 ,14 ,15 ,16].includes(this.currentDay) && this.currentYear === 1) {
                this.todayFestival = this.festivalInfo[18];
            }
            if (this.currentDay === 19) {
                this.todayFestival = this.festivalInfo[19];
            }
            if (this.currentDay === 24) {
                this.todayFestival = this.festivalInfo[20];
            }
            if (this.currentDay === 27) {
                this.todayFestival = this.festivalInfo[21];
            }
            if (this.currentDay === 30) {
                this.todayFestival = this.festivalInfo[22];
            }
        }
    }

    // If the NPC is selected, get their schedule
    // Start of NPC Schedule Functions
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
            this.getGraySchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 9)) {
            this.getHarrisSchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 10)) {
            this.getJeffSchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 11)) {
            this.getKaiSchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 12)) {
            this.getKentSchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 13)) {
            this.getStuSchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 14)) {
            this.getPastorSchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 15)) {
            this.getBasilSchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 16)) {
            this.getLilliaSchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 17)) {
            this.getDougSchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 18)) {
            this.getMayorSchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 19)) {
            this.getMayorsWifeSchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 20)) {
            this.getPotionShopOwnerSchedule();
        }
        if (this.selectedNPCs.some(e => e.id === 21)) {
            this.getMaySchedule();
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
        else if (this.dayOfWeek === 'Sunday') {
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

    public getGraySchedule() {
        if (this.dayOfWeek === 'Sunday') {
            this.npcInfo[7].today = this.npcInfo[7].schedule[1];
        }
        else if (this.dayOfWeek === 'Thursday') {
            this.npcInfo[7].today = this.npcInfo[7].schedule[2];
        }
        else if (['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'].includes(this.dayOfWeek)) {
            this.npcInfo[7].today = this.npcInfo[7].schedule[0];
        }
    }

    public getHarrisSchedule() {
        if (['Summer', 'Winter'].includes(this.currentSeason) && this.currentDay < 11 && this.dayOfWeek === 'Sunday') {
            this.npcInfo[8].today = this.npcInfo[8].schedule[2];
        }
        else if (this.dayOfWeek === 'Sunday') {
            this.npcInfo[8].today = this.npcInfo[8].schedule[1];
        }
        else if (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].includes(this.dayOfWeek)) {
            this.npcInfo[8].today = this.npcInfo[8].schedule[0];
        }
    }

    public getJeffSchedule() {
        if (this.dayOfWeek === 'Monday') {
            this.npcInfo[9].today = this.npcInfo[9].schedule[0];
        }
        else if (this.dayOfWeek === 'Sunday') {
            this.npcInfo[9].today = this.npcInfo[9].schedule[2];
        }
        else {
            this.npcInfo[9].today = this.npcInfo[9].schedule[1];
        }
    }

    public getKaiSchedule() {
        if (this.currentSeason === 'Winter' && this.dayOfWeek === 'Sunday') {
            this.npcInfo[10].today = this.npcInfo[10].schedule[3];
        }
        else if (this.currentSeason === 'Winter' && ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].includes(this.dayOfWeek)) {
            this.npcInfo[10].today = this.npcInfo[10].schedule[2];
        }
        else if (this.dayOfWeek === 'Sunday') {
            this.npcInfo[10].today = this.npcInfo[10].schedule[1];
        }
        else if (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].includes(this.dayOfWeek)) {
            this.npcInfo[10].today = this.npcInfo[10].schedule[0];
        }
    }

    public getKentSchedule() {
        if (this.currentSeason === 'Winter' && this.dayOfWeek === 'Sunday') {
            this.npcInfo[11].today = this.npcInfo[11].schedule[3];
        }
        else if (this.currentSeason === 'Summer' && this.dayOfWeek === 'Sunday') {
            this.npcInfo[11].today = this.npcInfo[11].schedule[4];
        }
        else if (this.dayOfWeek === 'Sunday') {
            this.npcInfo[11].today = this.npcInfo[11].schedule[2];
        }
        else if (this.dayOfWeek === 'Saturday') {
            this.npcInfo[11].today = this.npcInfo[11].schedule[1];
        }
        else if (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(this.dayOfWeek)) {
            this.npcInfo[11].today = this.npcInfo[11].schedule[0];
        }
    }

    public getStuSchedule() {
        if (this.currentSeason === 'Winter' && this.dayOfWeek === 'Sunday') {
            this.npcInfo[12].today = this.npcInfo[12].schedule[3];
        }
        else if (this.currentSeason === 'Summer' && this.dayOfWeek === 'Sunday') {
            this.npcInfo[12].today = this.npcInfo[12].schedule[4];
        }
        else if (this.dayOfWeek === 'Sunday') {
            this.npcInfo[12].today = this.npcInfo[12].schedule[2];
        }
        else if (this.dayOfWeek === 'Saturday') {
            this.npcInfo[12].today = this.npcInfo[12].schedule[1];
        }
        else if (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(this.dayOfWeek)) {
            this.npcInfo[12].today = this.npcInfo[12].schedule[0];
        }
    }

    public getPastorSchedule() {
        if (this.dayOfWeek === 'Saturday') {
            this.npcInfo[13].today = this.npcInfo[13].schedule[1];
        }
        else {
            this.npcInfo[13].today = this.npcInfo[13].schedule[0];
        }
    }

    public getBasilSchedule() {
        if (this.currentSeason === 'Winter') {
            this.npcInfo[14].today = this.npcInfo[14].schedule[0];
        }
        else if (this.currentSeason === 'Spring' && this.currentDay < 15) {
            this.npcInfo[14].today = this.npcInfo[14].schedule[0];
        }
        else if (this.currentSeason === 'Fall' && this.currentDay > 3) {
            this.npcInfo[14].today = this.npcInfo[14].schedule[0];
        }
        else if (this.dayOfWeek === 'Sunday') {
            this.npcInfo[14].today = this.npcInfo[14].schedule[4];
        }
        else if (this.dayOfWeek === 'Thursday') {
            this.npcInfo[14].today = this.npcInfo[14].schedule[2];
        }
		else if (['Friday', 'Saturday'].includes(this.dayOfWeek)) {
			this.npcInfo[14].today = this.npcInfo[14].schedule[3];
		}
        else {
            this.npcInfo[14].today = this.npcInfo[14].schedule[1];
        }
    }

    public getLilliaSchedule() {
        if (this.dayOfWeek === 'Sunday') {
            this.npcInfo[15].today = this.npcInfo[15].schedule[1];
        }
        else {
            this.npcInfo[15].today = this.npcInfo[15].schedule[0];
        }
    }

    public getDougSchedule() {
        if (this.dayOfWeek === 'Sunday') {
            this.npcInfo[16].today = this.npcInfo[16].schedule[2]
        }
        else if (this.dayOfWeek === 'Thursday') {
            this.npcInfo[16].today = this.npcInfo[16].schedule[1]
        }
        else {
            this.npcInfo[16].today = this.npcInfo[16].schedule[0]
        }
    }

    public getMayorSchedule() {
        if (['Summer', 'Winter'].includes(this.currentSeason) && this.currentDay < 11 && this.dayOfWeek === 'Saturday') {
            this.npcInfo[17].today = this.npcInfo[17].schedule[3];
        }
        else if (this.dayOfWeek === 'Saturday') {
            this.npcInfo[17].today = this.npcInfo[17].schedule[2];
        }
        else if (this.dayOfWeek === 'Sunday') {
            this.npcInfo[17].today = this.npcInfo[17].schedule[4];
        }
        else if (this.dayOfWeek === 'Friday') {
            this.npcInfo[17].today = this.npcInfo[17].schedule[1];
        }
        else if (['Monday', 'Tuesday', 'Wednesday', 'Thursday'].includes(this.dayOfWeek)) {
            this.npcInfo[17].today = this.npcInfo[17].schedule[0];
        }
    }

    public getMayorsWifeSchedule() {
        if (this.dayOfWeek === 'Sunday') {
            this.npcInfo[18].today = this.npcInfo[18].schedule[2];
        }
        else if (this.dayOfWeek === 'Friday') {
            this.npcInfo[18].today = this.npcInfo[18].schedule[1];
        }
        else {
            this.npcInfo[18].today = this.npcInfo[18].schedule[0];
        }
    }

    public getPotionShopOwnerSchedule() {
        if (this.dayOfWeek === 'Sunday') {
            this.npcInfo[19].today = this.npcInfo[19].schedule[2];
        }
        else if (this.dayOfWeek === 'Saturday') {
            this.npcInfo[19].today = this.npcInfo[19].schedule[1];
        }
        else {
            this.npcInfo[19].today = this.npcInfo[19].schedule[0];
        }
    }

    public getMaySchedule() {
        if (['Summer', 'Winter'].includes(this.currentSeason) && this.currentDay < 11 && this.dayOfWeek === 'Sunday') {
            this.npcInfo[20].today = this.npcInfo[20].schedule[5];
        }
        else if (['Summer', 'Winter'].includes(this.currentSeason) && this.currentDay < 11 && this.dayOfWeek === 'Saturday') {
            this.npcInfo[20].today = this.npcInfo[20].schedule[3];
        }
        else if (['Summer', 'Winter'].includes(this.currentSeason) && this.currentDay < 11 && ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(this.dayOfWeek)) {
            this.npcInfo[20].today = this.npcInfo[20].schedule[1];
        }
        else if (this.dayOfWeek === 'Sunday') {
            this.npcInfo[20].today = this.npcInfo[20].schedule[4];
        }
        else if (this.dayOfWeek === 'Saturday') {
            this.npcInfo[20].today = this.npcInfo[20].schedule[2];
        }
        else if (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(this.dayOfWeek)) {
            this.npcInfo[20].today = this.npcInfo[20].schedule[0];
        }
    }
    // End of NPC Schedule Functions
}

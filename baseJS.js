<script language="JavaScript" type="text/javascript">

function process()
{
	var survey = document.survey;
	var i = 0;
	var j = 0;
        var ll = 0;
	var value = "-1";
	var race = "";
	var align = "";
	var primclass = "";
	var secclass = "";
	var level=0;

	var strength = 0;
	var dexterity = 0;
	var constitution = 0;
	var intelligence = 0;
	var wisdom = 0;
	var charisma = 0;

	var dwarf = 0;
	var elf = 0;
	var halfelf = 4;
	var halfling = 0;
	var human = 13;
	var halforc = 0;
	var gnome = 0;

	var lg = 0;
	var ln = 0;
	var le = 0;
	var ng = 0;
	var nn = 0;
	var ne = 0;
	var cg = 0;
	var cn = 0;
	var ce = 0;
	var tie = -1;

	var lx = 0;
	var nx = 0;
	var cx = 0;
	var xg = 0;
	var xn = 0;
	var xe = 0;

	var fighter = 0;
	var ranger = 0;
	var paladin = 0;
	var cleric = 0;
	var druid = 0;
	var bard = 0;
	var monk = 0;
	var sorcerer = 0;
	var barbarian = 0;
	var rogue = 0;
	var wizard = 0;
	var warlock = 0;

	var deitychk = 0;
<!--	if (survey.deity.checked) deitychk = 1;-->
	var deity = "";

	for (i = 0; i < survey.q41.length; i++) if (survey.q41[i].checked) value = survey.q41[i].value;
	switch (value) {
                case "2": charisma+=2; break;
                case "3": charisma+=3; break;
                case "4": charisma+=4; break;
                case "5": charisma+=5; }

value = "-1";

	for (i = 0; i < survey.q42.length; i++) if (survey.q42[i].checked) value = survey.q42[i].value;
	switch (value) {
                case "2": intelligence+=2; break;
                case "3": intelligence+=3; break;
                case "4": intelligence+=4; break;
                case "5": intelligence+=5; }

value = "-1";

	for (i = 0; i < survey.q43.length; i++) if (survey.q43[i].checked) value = survey.q43[i].value;
	switch (value) {
                case "1": charisma+=2; break;
                case "2": charisma+=3; break;
                case "4": charisma+=5; break;
                case "5": charisma+=4; }

value = "-1";

	for (i = 0; i < survey.q44.length; i++) if (survey.q44[i].checked) value = survey.q44[i].value;
	switch (value) {
                case "1": wisdom+=5; break;
                case "2": wisdom+=4; break;
                case "3": wisdom+=3; break;
                case "4": wisdom+=2; }
 
value = "-1";

	for (i = 0; i < survey.q45.length; i++) if (survey.q45[i].checked) value = survey.q45[i].value;
	switch (value) {
                case "1": charisma+=5; break;
                case "2": charisma+=4; break;
                case "3": charisma+=3; break;
                case "4": charisma+=2; }

value = "-1";

	for (i = 0; i < survey.q46.length; i++) if (survey.q46[i].checked) value = survey.q46[i].value;
	switch (value) {
                case "2": constitution+=2; break;
                case "3": constitution+=3; break;
                case "4": constitution+=4; break;
                case "5": constitution+=5; }

value = "-1";

	for (i = 0; i < survey.q47.length; i++) if (survey.q47[i].checked) value = survey.q47[i].value;
	switch (value) {
                case "1": constitution+=3; break;
                case "3": constitution+=2; break;
                case "4": constitution+=4; break;
                case "5": constitution+=5; }

value = "-1";

	for (i = 0; i < survey.q48.length; i++) if (survey.q48[i].checked) value = survey.q48[i].value;
	switch (value) {
                case "1": charisma+=2; break;
                case "2": charisma+=3; break;
                case "4": charisma+=4; break;
                case "5": charisma+=5; }

value = "-1";

	for (i = 0; i < survey.q49.length; i++) if (survey.q49[i].checked) value = survey.q49[i].value;
	switch (value) {
                case "1": intelligence+=4; break;
                case "2": intelligence+=3; break;
                case "3": intelligence+=5; break;
                case "4": intelligence+=2; }

value = "-1";

	for (i = 0; i < survey.q50.length; i++) if (survey.q50[i].checked) value = survey.q50[i].value;
	switch (value) {
                case "1": intelligence+=2; break;
                case "3": intelligence+=3; break;
                case "4": intelligence+=4; break;
                case "5": intelligence+=5; }

value = "-1";

	for (i = 0; i < survey.q51.length; i++) if (survey.q51[i].checked) value = survey.q51[i].value;
	switch (value) {
                case "2": constitution+=4; break;
                case "3": constitution+=5; break;
                case "4": constitution+=3; break;
                case "5": constitution+=2; }

value = "-1";

	for (i = 0; i < survey.q52.length; i++) if (survey.q52[i].checked) value = survey.q52[i].value;
	switch (value) {
                case "1": strength+=3; break;
                case "2": strength+=5; break;
                case "3": strength+=4; break;
                case "4": strength+=2; }

value = "-1";

	for (i = 0; i < survey.q53.length; i++) if (survey.q53[i].checked) value = survey.q53[i].value;
	switch (value) {
                case "2": wisdom+=2; break;
                case "3": wisdom+=3; break;
                case "4": wisdom+=4; break;
                case "5": wisdom+=5; }

value = "-1";

	for (i = 0; i < survey.q54.length; i++) if (survey.q54[i].checked) value = survey.q54[i].value;
	switch (value) {
                case "1": wisdom+=3; break;
                case "2": wisdom+=5; break;
                case "3": wisdom+=2; break;
                case "5": wisdom+=4; }

value = "-1";

	for (i = 0; i < survey.q55.length; i++) if (survey.q55[i].checked) value = survey.q55[i].value;
	switch (value) {
                case "1": strength+=3; break;
                case "2": strength+=2; break;
                case "3": strength+=4; break;
                case "4": strength+=5; }

value = "-1";

	for (i = 0; i < survey.q56.length; i++) if (survey.q56[i].checked) value = survey.q56[i].value;
	switch (value) {
                case "2": dexterity+=2; break;
                case "3": dexterity+=3; break;
                case "4": dexterity+=4; break;
                case "5": dexterity+=5; }

value = "-1";

	for (i = 0; i < survey.q57.length; i++) if (survey.q57[i].checked) value = survey.q57[i].value;
	switch (value) {
                case "1": wisdom+=5; break;
                case "3": wisdom+=4; break;
                case "4": wisdom+=2; break;
                case "5": wisdom+=3; }

value = "-1";

	for (i = 0; i < survey.q58.length; i++) if (survey.q58[i].checked) value = survey.q58[i].value;
	switch (value) {
                case "1": dexterity+=2; break;
                case "2": dexterity+=5; break;
                case "3": dexterity+=3; break;
                case "5": dexterity+=4; }

value = "-1";

	for (i = 0; i < survey.q59.length; i++) if (survey.q59[i].checked) value = survey.q59[i].value;
	switch (value) {
                case "1": intelligence+=5; break;
                case "2": intelligence+=4; break;
                case "3": intelligence+=3; break;
                case "4": intelligence+=2; }

value = "-1";

	for (i = 0; i < survey.q60.length; i++) if (survey.q60[i].checked) value = survey.q60[i].value;
	switch (value) {
                case "1": constitution+=5; break;
                case "2": constitution+=4; break;
                case "3": constitution+=3; break;
                case "4": constitution+=2; }

value = "-1";

	for (i = 0; i < survey.q61.length; i++) if (survey.q61[i].checked) value = survey.q61[i].value;
	switch (value) {
                case "1": strength+=5; break;
                case "2": strength+=4; break;
                case "3": strength+=3; break;
                case "4": strength+=2; }

value = "-1";

	for (i = 0; i < survey.q62.length; i++) if (survey.q62[i].checked) value = survey.q62[i].value;
	switch (value) {
                case "1": dexterity+=5; break;
                case "2": dexterity+=4; break;
                case "3": dexterity+=3; break;
                case "4": dexterity+=2; }

value = "-1";

	for (i = 0; i < survey.q63.length; i++) if (survey.q63[i].checked) value = survey.q63[i].value;
	switch (value) {
                case "2": strength+=2; break;
                case "3": strength+=3; break;
                case "4": strength+=4; break;
                case "5": strength+=5; }

value = "-1";

	for (i = 0; i < survey.q64.length; i++) if (survey.q64[i].checked) value = survey.q64[i].value;
	switch (value) {
                case "1": dexterity+=5; break;
                case "2": dexterity+=4; break;
                case "3": dexterity+=3; break;
                case "4": dexterity+=2; }

value = "-1";

	for (i = 0; i < survey.q71.length; i++) if (survey.q71[i].checked) value = survey.q71[i].value;
	switch (value) {
                case "1": barbarian+=2; break;
                case "2": ranger+=2; }

value = "-1";
     
	for (i = 0; i < survey.q72.length; i++) if (survey.q72[i].checked) value = survey.q72[i].value;
	switch (value) {
                case "1": paladin+=2; break;
                case "2": druid+=2; }

value = "-1";
              
	for (i = 0; i < survey.q73.length; i++) if (survey.q73[i].checked) value = survey.q73[i].value;
	switch (value) {
                case "1": rogue+=2; break;
                case "2": sorcerer+=2; }

value = "-1";
                
	for (i = 0; i < survey.q74.length; i++) if (survey.q74[i].checked) value = survey.q74[i].value;
	switch (value) {
                case "1": sorcerer+=2; break;
                case "2": paladin+=2; }
 
value = "-1";
              
	for (i = 0; i < survey.q75.length; i++) if (survey.q75[i].checked) value = survey.q75[i].value;
	switch (value) {
                case "1": paladin+=2; break;
                case "2": cleric+=2; }

value = "-1";
                
	for (i = 0; i < survey.q76.length; i++) if (survey.q76[i].checked) value = survey.q76[i].value;
	switch (value) {
                case "1": paladin+=2; break;
                case "2": barbarian+=2; }
 
value = "-1";
              
	for (i = 0; i < survey.q77.length; i++) if (survey.q77[i].checked) value = survey.q77[i].value;
	switch (value) {
                case "1": paladin+=2; break;
                case "2": ranger+=2; }
            
value = "-1";
    
	for (i = 0; i < survey.q78.length; i++) if (survey.q78[i].checked) value = survey.q78[i].value;
	switch (value) {
                case "1": fighter+=2; break;
                case "2": bard+=2; }
                
value = "-1";

	for (i = 0; i < survey.q79.length; i++) if (survey.q79[i].checked) value = survey.q79[i].value;
	switch (value) {
                case "1": druid+=2; break;
                case "2": barbarian+=2; }
                
value = "-1";

	for (i = 0; i < survey.q80.length; i++) if (survey.q80[i].checked) value = survey.q80[i].value;
	switch (value) {
                case "1": wizard+=2; break;
                case "2": ranger+=2; }
                
value = "-1";

	for (i = 0; i < survey.q81.length; i++) if (survey.q81[i].checked) value = survey.q81[i].value;
	switch (value) {
                case "1": cleric+=2; break;
                case "2": barbarian+=2; }
     
value = "-1";

	for (i = 0; i < survey.q82.length; i++) if (survey.q82[i].checked) value = survey.q82[i].value;
	switch (value) {
                case "1": barbarian+=2; break;
                case "2": monk+=2; }
              
value = "-1";

	for (i = 0; i < survey.q83.length; i++) if (survey.q83[i].checked) value = survey.q83[i].value;
	switch (value) {
                case "1": monk+=2; break;
                case "2": sorcerer+=2; }
                
value = "-1";

	for (i = 0; i < survey.q84.length; i++) if (survey.q84[i].checked) value = survey.q84[i].value;
	switch (value) {
                case "1": cleric+=2; break;
                case "2": wizard+=2; }
               
value = "-1";

	for (i = 0; i < survey.q85.length; i++) if (survey.q85[i].checked) value = survey.q85[i].value;
	switch (value) {
                case "1": druid+=2; break;
                case "2": monk+=2; }
                
value = "-1";

	for (i = 0; i < survey.q86.length; i++) if (survey.q86[i].checked) value = survey.q86[i].value;
	switch (value) {
                case "1": monk+=2; break;
                case "2": rogue+=2; }
               
value = "-1";

	for (i = 0; i < survey.q87.length; i++) if (survey.q87[i].checked) value = survey.q87[i].value;
	switch (value) {
                case "1": bard+=2; break;
                case "2": paladin+=2; }
                
value = "-1";

	for (i = 0; i < survey.q88.length; i++) if (survey.q88[i].checked) value = survey.q88[i].value;
	switch (value) {
                case "1": rogue+=2; break;
                case "2": barbarian+=2; }
                
value = "-1";

	for (i = 0; i < survey.q89.length; i++) if (survey.q89[i].checked) value = survey.q89[i].value;
	switch (value) {
                case "1": rogue+=2; break;
                case "2": wizard+=2; }
               
value = "-1";
 
	for (i = 0; i < survey.q90.length; i++) if (survey.q90[i].checked) value = survey.q90[i].value;
	switch (value) {
                case "1": fighter+=2; break;
                case "2": barbarian+=2; }
         
value = "-1";

	for (i = 0; i < survey.q91.length; i++) if (survey.q91[i].checked) value = survey.q91[i].value;
	switch (value) {
                case "1": sorcerer+=2; break;
                case "2": bard+=2; }
     
value = "-1";

	for (i = 0; i < survey.q92.length; i++) if (survey.q92[i].checked) value = survey.q92[i].value;
	switch (value) {
                case "1": wizard+=2; break;
                case "2": paladin+=2; }
              
value = "-1";

	for (i = 0; i < survey.q93.length; i++) if (survey.q93[i].checked) value = survey.q93[i].value;
	switch (value) {
                case "1": rogue+=2; break;
                case "2": ranger+=2; }
                
value = "-1";

	for (i = 0; i < survey.q94.length; i++) if (survey.q94[i].checked) value = survey.q94[i].value;
	switch (value) {
                case "1": rogue+=2; break;
                case "2": cleric+=2; }
               
value = "-1";

	for (i = 0; i < survey.q95.length; i++) if (survey.q95[i].checked) value = survey.q95[i].value;
	switch (value) {
                case "1": sorcerer+=2; break;
                case "2": druid+=2; }
                
value = "-1";

	for (i = 0; i < survey.q96.length; i++) if (survey.q96[i].checked) value = survey.q96[i].value;
	switch (value) {
                case "1": wizard+=2; break;
                case "2": druid+=2; }
               
value = "-1";

	for (i = 0; i < survey.q97.length; i++) if (survey.q97[i].checked) value = survey.q97[i].value;
	switch (value) {
                case "1": paladin+=2; break;
                case "2": rogue+=2; }
                
value = "-1";

	for (i = 0; i < survey.q98.length; i++) if (survey.q98[i].checked) value = survey.q98[i].value;
	switch (value) {
                case "1": paladin+=2; break;
                case "2": monk+=2; }
                
value = "-1";

	for (i = 0; i < survey.q99.length; i++) if (survey.q99[i].checked) value = survey.q99[i].value;
	switch (value) {
                case "1": sorcerer+=2; break;
                case "2": fighter+=2; }
                
value = "-1";

	for (i = 0; i < survey.q100.length; i++) if (survey.q100[i].checked) value = survey.q100[i].value;
	switch (value) {
                case "1": druid+=2; break;
                case "2": rogue+=2; }
                
value = "-1";

	for (i = 0; i < survey.q101.length; i++) if (survey.q101[i].checked) value = survey.q101[i].value;
	switch (value) {
                case "1": sorcerer+=2; break;
                case "2": barbarian+=2; }
     
value = "-1";

	for (i = 0; i < survey.q102.length; i++) if (survey.q102[i].checked) value = survey.q102[i].value;
	switch (value) {
                case "1": fighter+=2; break;
                case "2": wizard+=2; }
              
value = "-1";

	for (i = 0; i < survey.q103.length; i++) if (survey.q103[i].checked) value = survey.q103[i].value;
	switch (value) {
                case "1": fighter+=2; break;
                case "2": rogue+=2; }
                
value = "-1";

	for (i = 0; i < survey.q104.length; i++) if (survey.q104[i].checked) value = survey.q104[i].value;
	switch (value) {
                case "1": monk+=2; break;
                case "2": cleric+=2; }
               
value = "-1";

	for (i = 0; i < survey.q105.length; i++) if (survey.q105[i].checked) value = survey.q105[i].value;
	switch (value) {
                case "1": barbarian+=2; break;
                case "2": bard+=2; }
                
value = "-1";

	for (i = 0; i < survey.q106.length; i++) if (survey.q106[i].checked) value = survey.q106[i].value;
	switch (value) {
                case "1": ranger+=2; break;
                case "2": sorcerer+=2; }
               
value = "-1";

	for (i = 0; i < survey.q107.length; i++) if (survey.q107[i].checked) value = survey.q107[i].value;
	switch (value) {
                case "1": ranger+=2; break;
                case "2": fighter+=2; }
                
value = "-1";

	for (i = 0; i < survey.q108.length; i++) if (survey.q108[i].checked) value = survey.q108[i].value;
	switch (value) {
                case "1": ranger+=2; break;
                case "2": cleric+=2; }
                
value = "-1";

	for (i = 0; i < survey.q109.length; i++) if (survey.q109[i].checked) value = survey.q109[i].value;
	switch (value) {
                case "1": fighter+=2; break;
                case "2": monk+=2; }
                
value = "-1";

	for (i = 0; i < survey.q110.length; i++) if (survey.q110[i].checked) value = survey.q110[i].value;
	switch (value) {
                case "1": fighter+=2; break;
                case "2": cleric+=2; }
                
value = "-1";

	for (i = 0; i < survey.q111.length; i++) if (survey.q111[i].checked) value = survey.q111[i].value;
	switch (value) {
                case "1": fighter+=2; break;
                case "2": paladin+=2; }
     
value = "-1";

	for (i = 0; i < survey.q112.length; i++) if (survey.q112[i].checked) value = survey.q112[i].value;
	switch (value) {
                case "1": druid+=2; break;
                case "2": ranger+=2; }
              
value = "-1";

	for (i = 0; i < survey.q113.length; i++) if (survey.q113[i].checked) value = survey.q113[i].value;
	switch (value) {
                case "1": druid+=2; break;
                case "2": fighter+=2; }
                
value = "-1";

	for (i = 0; i < survey.q114.length; i++) if (survey.q114[i].checked) value = survey.q114[i].value;
	switch (value) {
                case "1": bard+=2; break;
                case "2": rogue+=2; }
               
value = "-1";

	for (i = 0; i < survey.q115.length; i++) if (survey.q115[i].checked) value = survey.q115[i].value;
	switch (value) {
                case "1": sorcerer+=2; break;
                case "2": wizard+=2; }
                
value = "-1";

	for (i = 0; i < survey.q116.length; i++) if (survey.q116[i].checked) value = survey.q116[i].value;
	switch (value) {
                case "1": wizard+=2; break;
                case "2": bard+=2; }
               
value = "-1";

	for (i = 0; i < survey.q117.length; i++) if (survey.q117[i].checked) value = survey.q117[i].value;
	switch (value) {
                case "1": cleric+=2; break;
                case "2": druid+=2; }
                
value = "-1";

	for (i = 0; i < survey.q118.length; i++) if (survey.q118[i].checked) value = survey.q118[i].value;
	switch (value) {
                case "1": wizard+=2; break;
                case "2": barbarian+=2; }
                
value = "-1";

	for (i = 0; i < survey.q119.length; i++) if (survey.q119[i].checked) value = survey.q119[i].value;
	switch (value) {
                case "1": bard+=2; break;
                case "2": ranger+=2; }
                
value = "-1";

	for (i = 0; i < survey.q120.length; i++) if (survey.q120[i].checked) value = survey.q120[i].value;
	switch (value) {
                case "1": monk+=2; break;
                case "2": wizard+=2; }
                
value = "-1";

	for (i = 0; i < survey.q121.length; i++) if (survey.q121[i].checked) value = survey.q121[i].value;
	switch (value) {
                case "1": monk+=2; break;
                case "2": bard+=2; }
     
value = "-1";

	for (i = 0; i < survey.q122.length; i++) if (survey.q122[i].checked) value = survey.q122[i].value;
	switch (value) {
                case "1": druid+=2; break;
                case "2": bard+=2; }
              
value = "-1";

	for (i = 0; i < survey.q123.length; i++) if (survey.q123[i].checked) value = survey.q123[i].value;
	switch (value) {
                case "1": ranger+=2; break;
                case "2": monk+=2; }
                
value = "-1";

	for (i = 0; i < survey.q124.length; i++) if (survey.q124[i].checked) value = survey.q124[i].value;
	switch (value) {
                case "1": cleric+=2; break;
                case "2": bard+=2; }
               
value = "-1";

	for (i = 0; i < survey.q125.length; i++) if (survey.q125[i].checked) value = survey.q125[i].value;
	switch (value) {
                case "1": cleric+=2; break;
                case "2": sorcerer+=2; }

value = "-1";

	for (i = 0; i < survey.q201.length; i++) if (survey.q201[i].checked) value = survey.q201[i].value;
	switch (value) {
                case "1": xg+=2; break;
                case "2": xg+=1; break;
                case "3": xe+=1; break;
                case "4": xe+=2; }

value = "-1";

	for (i = 0; i < survey.q202.length; i++) if (survey.q202[i].checked) value = survey.q202[i].value;
	switch (value) {
                case "1": xg+=2; break;
                case "2": xg+=1; break;
                case "3": xn+=1; break;
                case "4": xn+=2; }

value = "-1";

	for (i = 0; i < survey.q203.length; i++) if (survey.q203[i].checked) value = survey.q203[i].value;
	switch (value) {
                case "1": xe+=2; break;
                case "2": xe+=1; break;
                case "3": xn+=1; break;
                case "4": xn+=2; }

value = "-1";

	for (i = 0; i < survey.q204.length; i++) if (survey.q204[i].checked) value = survey.q204[i].value;
	switch (value) {
                case "1": lx+=2; break;
                case "2": lx+=1; break;
                case "3": cx+=1; break;
                case "4": cx+=2; }

value = "-1";

	for (i = 0; i < survey.q205.length; i++) if (survey.q205[i].checked) value = survey.q205[i].value;
	switch (value) {
                case "1": lx+=2; break;
                case "2": lx+=1; break;
                case "3": nx+=1; break;
                case "4": nx+=2; }

value = "-1";

	for (i = 0; i < survey.q206.length; i++) if (survey.q206[i].checked) value = survey.q206[i].value;
	switch (value) {
                case "1": cx+=2; break;
                case "2": cx+=1; break;
                case "3": nx+=1; break;
                case "4": nx+=2; }

value = "-1";

	for (i = 0; i < survey.q207.length; i++) if (survey.q207[i].checked) value = survey.q207[i].value;
	switch (value) {
                case "1": xe+=2; break;
                case "2": xe+=1; break;
                case "3": xg+=1; break;
                case "4": xg+=2; }

value = "-1";

	for (i = 0; i < survey.q208.length; i++) if (survey.q208[i].checked) value = survey.q208[i].value;
	switch (value) {
                case "1": xg+=2; break;
                case "2": xg+=1; break;
                case "3": xn+=1; break;
                case "4": xn+=2; }

value = "-1";

	for (i = 0; i < survey.q209.length; i++) if (survey.q209[i].checked) value = survey.q209[i].value;
	switch (value) {
                case "1": xe+=2; break;
                case "2": xe+=1; break;
                case "3": xn+=1; break;
                case "4": xn+=2; }

value = "-1";

	for (i = 0; i < survey.q210.length; i++) if (survey.q210[i].checked) value = survey.q210[i].value;
	switch (value) {
                case "1": lx+=2; break;
                case "2": lx+=1; break;
                case "3": cx+=1; break;
                case "4": cx+=2; }

value = "-1";

	for (i = 0; i < survey.q211.length; i++) if (survey.q211[i].checked) value = survey.q211[i].value;
	switch (value) {
                case "1": lx+=2; break;
                case "2": lx+=1; break;
                case "3": nx+=1; break;
                case "4": nx+=2; }

value = "-1";

	for (i = 0; i < survey.q212.length; i++) if (survey.q212[i].checked) value = survey.q212[i].value;
	switch (value) {
                case "1": nx+=2; break;
                case "2": nx+=1; break;
                case "3": cx+=1; break;
                case "4": cx+=2; }

value = "-1";

	for (i = 0; i < survey.q213.length; i++) if (survey.q213[i].checked) value = survey.q213[i].value;
	switch (value) {
                case "1": xg+=2; break;
                case "2": xg+=1; break;
                case "3": xn+=1; break;
                case "4": xn+=2; }

value = "-1";

	for (i = 0; i < survey.q214.length; i++) if (survey.q214[i].checked) value = survey.q214[i].value;
	switch (value) {
                case "1": xg+=2; break;
                case "2": xg+=1; break;
                case "3": xe+=1; break;
                case "4": xe+=2; }

value = "-1";

	for (i = 0; i < survey.q215.length; i++) if (survey.q215[i].checked) value = survey.q215[i].value;
	switch (value) {
                case "1": xn+=2; break;
                case "2": xn+=1; break;
                case "3": xe+=1; break;
                case "4": xe+=2; }

value = "-1";

	for (i = 0; i < survey.q216.length; i++) if (survey.q216[i].checked) value = survey.q216[i].value;
	switch (value) {
                case "1": lx+=2; break;
                case "2": lx+=1; break;
                case "3": cx+=1; break;
                case "4": cx+=2; }

value = "-1";

	for (i = 0; i < survey.q217.length; i++) if (survey.q217[i].checked) value = survey.q217[i].value;
	switch (value) {
                case "1": cx+=2; break;
                case "2": cx+=1; break;
                case "3": nx+=1; break;
                case "4": nx+=2; }

value = "-1";

	for (i = 0; i < survey.q218.length; i++) if (survey.q218[i].checked) value = survey.q218[i].value;
	switch (value) {
                case "1": lx+=2; break;
                case "2": lx+=1; break;
                case "3": nx+=1; break;
                case "4": nx+=2; }

value = "-1";

	for (i = 0; i < survey.q219.length; i++) if (survey.q219[i].checked) value = survey.q219[i].value;
	switch (value) {
                case "1": xg+=2; break;
                case "2": xg+=1; break;
                case "3": xe+=1; break;
                case "4": xe+=2; }

value = "-1";

	for (i = 0; i < survey.q220.length; i++) if (survey.q220[i].checked) value = survey.q220[i].value;
	switch (value) {
                case "1": xe+=2; break;
                case "2": xe+=1; break;
                case "3": xn+=1; break;
                case "4": xn+=2; }

value = "-1";

	for (i = 0; i < survey.q221.length; i++) if (survey.q221[i].checked) value = survey.q221[i].value;
	switch (value) {
                case "1": xg+=2; break;
                case "2": xg+=1; break;
                case "3": xn+=1; break;
                case "4": xn+=2; }

value = "-1";

	for (i = 0; i < survey.q222.length; i++) if (survey.q222[i].checked) value = survey.q222[i].value;
	switch (value) {
                case "1": lx+=2; break;
                case "2": lx+=1; break;
                case "3": cx+=1; break;
                case "4": cx+=2; }

value = "-1";

	for (i = 0; i < survey.q223.length; i++) if (survey.q223[i].checked) value = survey.q223[i].value;
	switch (value) {
                case "1": cx+=2; break;
                case "2": cx+=1; break;
                case "3": nx+=1; break;
                case "4": nx+=2; }

value = "-1";

	for (i = 0; i < survey.q224.length; i++) if (survey.q224[i].checked) value = survey.q224[i].value;
	switch (value) {
                case "1": lx+=2; break;
                case "2": lx+=1; break;
                case "3": nx+=1; break;
                case "4": nx+=2; }

value = "-1";

	for (i = 0; i < survey.q225.length; i++) if (survey.q225[i].checked) value = survey.q225[i].value;
	switch (value) {
                case "1": xe+=2; break;
                case "2": xe+=1; break;
                case "3": xn+=1; break;
                case "4": xn+=2; }

value = "-1";

	for (i = 0; i < survey.q226.length; i++) if (survey.q226[i].checked) value = survey.q226[i].value;
	switch (value) {
                case "1": xn+=2; break;
                case "2": xn+=1; break;
                case "3": xg+=1; break;
                case "4": xg+=2; }

value = "-1";

	for (i = 0; i < survey.q227.length; i++) if (survey.q227[i].checked) value = survey.q227[i].value;
	switch (value) {
                case "1": xg+=2; break;
                case "2": xg+=1; break;
                case "3": xe+=1; break;
                case "4": xe+=2; }

value = "-1";

	for (i = 0; i < survey.q228.length; i++) if (survey.q228[i].checked) value = survey.q228[i].value;
	switch (value) {
                case "1": lx+=2; break;
                case "2": lx+=1; break;
                case "3": nx+=1; break;
                case "4": nx+=2; }

value = "-1";

	for (i = 0; i < survey.q229.length; i++) if (survey.q229[i].checked) value = survey.q229[i].value;
	switch (value) {
                case "1": cx+=2; break;
                case "2": cx+=1; break;
                case "3": nx+=1; break;
                case "4": nx+=2; }

value = "-1";

	for (i = 0; i < survey.q230.length; i++) if (survey.q230[i].checked) value = survey.q230[i].value;
	switch (value) {
                case "1": cx+=2; break;
                case "2": cx+=1; break;
                case "3": lx+=1; break;
                case "4": lx+=2; }

value = "-1";

	for (i = 0; i < survey.q231.length; i++) if (survey.q231[i].checked) value = survey.q231[i].value;
	switch (value) {
                case "1": xg+=2; break;
                case "2": xg+=1; break;
                case "3": xe+=1; break;
                case "4": xe+=2; }

value = "-1";

	for (i = 0; i < survey.q232.length; i++) if (survey.q232[i].checked) value = survey.q232[i].value;
	switch (value) {
                case "1": xg+=2; break;
                case "2": xg+=1; break;
                case "3": xn+=1; break;
                case "4": xn+=2; }

value = "-1";

	for (i = 0; i < survey.q233.length; i++) if (survey.q233[i].checked) value = survey.q233[i].value;
	switch (value) {
                case "1": xe+=2; break;
                case "2": xe+=1; break;
                case "3": xn+=1; break;
                case "4": xn+=2; }

value = "-1";

	for (i = 0; i < survey.q234.length; i++) if (survey.q234[i].checked) value = survey.q234[i].value;
	switch (value) {
                case "1": nx+=2; break;
                case "2": nx+=1; break;
                case "3": lx+=1; break;
                case "4": lx+=2; }

value = "-1";

	for (i = 0; i < survey.q235.length; i++) if (survey.q235[i].checked) value = survey.q235[i].value;
	switch (value) {
                case "1": cx+=2; break;
                case "2": cx+=1; break;
                case "3": lx+=1; break;
                case "4": lx+=2; }

value = "-1";

	for (i = 0; i < survey.q236.length; i++) if (survey.q236[i].checked) value = survey.q236[i].value;
	switch (value) {
                case "1": nx+=2; break;
                case "2": nx+=1; break;
                case "3": cx+=1; break;
                case "4": cx+=2; }

value = "-1";

	for (ll = 0; ll < survey.q237.length; ll++) if (survey.q237[ll].checked) value = survey.q237[ll].value;
	switch (value) {
                case "1": level-=1; break;
                case "2": level+=1; break;
                case "3": level+=2; break;
                case "4": level+=3; break;
                case "5": level+=4; break;
                case "6": level+=5; break;
                case "7": level+=6; break;
                case "8": level+=7; break;
                case "9": level+=8; break;
                case "10": level+=9; }

value = "-1";

	for (ll = 0; ll < survey.q238.length; ll++) if (survey.q238[ll].checked) value = survey.q238[ll].value;
	switch (value) {
                case "1": level-=1; break;
                case "2": level+=0; break;
                case "3": level+=1; }

value = "-1";

	for (i = 0; i < survey.q301.length; i++) if (survey.q301[i].checked) value = survey.q301[i].value;
	switch (value) {
                case "1": elf+=2; halfelf+=1; halforc+=2; break;
                case "2": halfling+=2; gnome+=2; }

value = "-1";

	for (i = 0; i < survey.q302.length; i++) if (survey.q302[i].checked) value = survey.q302[i].value;
	switch (value) {
                case "1": elf+=2; halfelf+=1; halfling+=2; break;
                case "2": dwarf+=2; gnome+=2; }

value = "-1";

	for (i = 0; i < survey.q303.length; i++) if (survey.q303[i].checked) value = survey.q303[i].value;
	switch (value) {
                case "1": halforc+=2; break;
                case "2": dwarf+=2; gnome+=2; }

value = "-1";

	for (i = 0; i < survey.q304.length; i++) if (survey.q304[i].checked) value = survey.q304[i].value;
	switch (value) {
                case "1": halforc+=2; break;
                case "2": elf+=2; halfelf+=1; halfling+=2; }

value = "-1";

	for (i = 0; i < survey.q305.length; i++) if (survey.q305[i].checked) value = survey.q305[i].value;
	switch (value) {
                case "1": gnome+=2; halfling+=2; break;
                case "2": dwarf+=2; halforc+=2; }

value = "-1";

	for (i = 0; i < survey.q306.length; i++) if (survey.q306[i].checked) value = survey.q306[i].value;
	switch (value) {
                case "1": dwarf+=2; break;
                case "2": halfling+=2; break;
                case "3": halfelf+=2; break;
                case "4": gnome+=2; break;
                case "5": halforc+=2; break;
                case "6": elf+=2; }

value = "-1";

	for (i = 0; i < survey.q307.length; i++) if (survey.q307[i].checked) value = survey.q307[i].value;
	switch (value) {
                case "1": elf+=2; break;
                case "2": halfelf+=2; break;
                case "3": gnome+=2; halfling+=2; break;
                case "4": halforc+=2; break;
                case "5": dwarf+=2; }

value = "-1";

	for (i = 0; i < survey.q308.length; i++) if (survey.q308[i].checked) value = survey.q308[i].value;
	switch (value) {
                case "1": dwarf+=2; break;
                case "2": elf+=2; break;
                case "3": gnome+=2; break;
                case "4": halfling+=2; break;
                case "5": halfelf+=2; break;
                case "6": halforc+=2; break;
                case "7": human+=1; }

value = "-1";

	for (i = 0; i < survey.q309.length; i++) if (survey.q309[i].checked) value = survey.q309[i].value;
	switch (value) {
                case "1": gnome+=2; halfling+=2; break;
                case "2": dwarf+=2; elf+=2; break;
                case "3": halfelf+=2; break;
                case "4": halforc+=2; break;
                case "5": halforc+=2; }

value = "-1";

	for (i = 0; i < survey.q310.length; i++) if (survey.q310[i].checked) value = survey.q310[i].value;
	switch (value) {
                case "1": dwarf+=2; break;
                case "2": elf+=2; halfelf+=1; }

value = "-1";

	for (i = 0; i < survey.q311.length; i++) if (survey.q311[i].checked) value = survey.q311[i].value;
	switch (value) {
                case "1": dwarf+=2; elf+=2; halfelf+=2; gnome+=2; halfling+=2; break;
                case "2": halforc+=2; }

value = "-1";

	for (i = 0; i < survey.q312.length; i++) if (survey.q312[i].checked) value = survey.q312[i].value;
	switch (value) {
                case "1": dwarf+=2; break;
                case "2": halfling+=2; break;
                case "3": gnome+=2; break;
                case "4": elf+=2; break;
                case "5": halforc+=2; break;
                case "6": halfelf+=2; break;
                case "7": human+=1; }

value = "-1";

	for (i = 0; i < survey.q401.length; i++) if (survey.q401[i].checked) value = survey.q401[i].value;
	switch (value) {
                case "1": warlock+=2; break;
                case "2": barbarian+=2; }

value = "-1";

	for (i = 0; i < survey.q402.length; i++) if (survey.q402[i].checked) value = survey.q402[i].value;
	switch (value) {
                case "1": bard+=2; break;
                case "2": warlock+=2; }

value = "-1";

	for (i = 0; i < survey.q403.length; i++) if (survey.q403[i].checked) value = survey.q403[i].value;
	switch (value) {
                case "1": cleric+=2; break;
                case "2": warlock+=2; }

value = "-1";

	for (i = 0; i < survey.q404.length; i++) if (survey.q404[i].checked) value = survey.q404[i].value;
	switch (value) {
                case "1": warlock+=2; break;
                case "2": druid+=2; }

value = "-1";

	for (i = 0; i < survey.q405.length; i++) if (survey.q405[i].checked) value = survey.q405[i].value;
	switch (value) {
                case "1": fighter+=2; break;
                case "2": warlock+=2; }

value = "-1";

	for (i = 0; i < survey.q406.length; i++) if (survey.q406[i].checked) value = survey.q406[i].value;
	switch (value) {
                case "1": monk+=2; break;
                case "2": warlock+=2; }

value = "-1";

	for (i = 0; i < survey.q407.length; i++) if (survey.q407[i].checked) value = survey.q407[i].value;
	switch (value) {
                case "1": paladin+=2; break;
                case "2": warlock+=2; }

value = "-1";

	for (i = 0; i < survey.q408.length; i++) if (survey.q408[i].checked) value = survey.q408[i].value;
	switch (value) {
                case "1": ranger+=2; break;
                case "2": warlock+=2; }

value = "-1";

	for (i = 0; i < survey.q409.length; i++) if (survey.q409[i].checked) value = survey.q409[i].value;
	switch (value) {
                case "1": rogue+=2; break;
                case "2": warlock+=2; }

value = "-1";

	for (i = 0; i < survey.q410.length; i++) if (survey.q410[i].checked) value = survey.q410[i].value;
	switch (value) {
                case "1": sorcerer+=2; break;
                case "2": warlock+=2; }

value = "-1";

	for (i = 0; i < survey.q411.length; i++) if (survey.q411[i].checked) value = survey.q411[i].value;
	switch (value) {
                case "1": warlock+=2; break;
                case "2": wizard+=2; }

value = "-1";

	i = human;
	race = "human";
	if (elf > i) { race = "elf"; i = elf; }
	if (halfelf > i) { race = "halfelf"; i = halfelf; }
	if (dwarf > i) { race = "dwarf"; i = dwarf; }
	if (halfling > i) { race = "halfling"; i = halfling; }
	if (halforc > i) { race = "halforc"; i = halforc; }
	if (gnome > i) { race = "gnome"; i = gnome; }

	lg = lx + xg;
	ng = nx + xg;
	cg = cx + xg;

	ln = lx + xn;
	nn = nx + xn;
	cn = cx + xn;

	le = lx + xe;
	ne = nx + xe;
	ce = cx + xe;

	i = nn;
	align = "nn";
	if (lg > i) { align = "lg"; i = lg; }
	if (ng > i) { align = "ng"; i = ng; }
	if (cg > i) { align = "cg"; i = cg; }
	if (ln > i) { align = "ln"; i = ln; }
	if (cn > i) { align = "cn"; i = cn; }
	if (le > i) { align = "le"; i = le; }
	if (ne > i) { align = "ne"; i = ne; }
	if (ce > i) { align = "ce"; i = ce; }

	if (lg==i) tie++;
	if (ng==i) tie++;
	if (cg==i) tie++;
	if (ln==i) tie++;
	if (nn==i) tie++;
	if (cn==i) tie++;
	if (le==i) tie++;
	if (ne==i) tie++;
	if (ce==i) tie++;

	if (tie != 0) {
		if (lx>nx&&lx>cx) align = "l";
		else if (cx>nx&&cx>lx) align = "c";
		else align ="n";

		if (xg>xe&&xg>xn) align += "g";
		else if (xe>xn&&xe>xg) align += "e";
		else align +="n"; }

	


        if (level < 1) {var level = 1;}

	i = fighter;
	primclass = "fighter";
	if (warlock > i) { primclass = "warlock"; i = warlock; }
	if (paladin > i) { primclass = "paladin"; i = paladin; }
	if (monk > i) { primclass = "monk"; i = monk; }
	if (barbarian > i) { primclass = "barbarian"; i = barbarian; }
	if (druid > i) { primclass = "druid"; i = druid; }
	if (ranger > i) { primclass = "ranger"; i = ranger; }
	if (bard > i) { primclass = "bard"; i = bard; }
	if (wizard > i) { primclass = "wizard"; i = wizard; }
	if (cleric > i) { primclass = "cleric"; i = cleric; }
	if (sorcerer > i) { primclass = "sorcerer"; i = sorcerer; }
	if (rogue > i) { primclass = "rogue"; i = rogue; }
	if (fighter > i) { primclass = "fighter"; i = fighter; }

	j = i-1;
	secclass = primclass;
	if (fighter > j && fighter > 0 && fighter <= i && primclass != "fighter") { secclass = "fighter"; j = fighter; }
	if (rogue > j && rogue > 0 && rogue <= i && primclass != "rogue") { secclass = "rogue"; j = rogue; }
	if (sorcerer > j && sorcerer > 0 && sorcerer <= i && primclass != "sorcerer") { secclass = "sorcerer"; j = sorcerer; }
	if (cleric > j && cleric > 0 && cleric <= i && primclass != "cleric") { secclass = "cleric"; j = cleric; }
	if (wizard > j && wizard > 0 && wizard <= i && primclass != "wizard") { secclass = "wizard"; j = wizard; }
	if (bard > j && bard > 0 && bard <= i && primclass != "bard") { secclass = "bard"; j = bard; }
	if (ranger > j && ranger > 0 && ranger <= i && primclass != "ranger") { secclass = "ranger"; j = ranger; }
	if (druid > j && druid > 0 && druid <= i && primclass != "druid") { secclass = "druid"; j = druid; }
	if (barbarian > j && barbarian > 0 && barbarian <= i && primclass != "barbarian") { secclass = "barbarian"; j = barbarian; }
	if (paladin > j && paladin > 0 && paladin <= i && primclass != "paladin") { secclass = "paladin"; j = paladin; }
	if (warlock > j && warlock > 0 && warlock <= i && primclass != "warlock") { secclass = "warlock"; j = warlock; }
	if (monk > j && monk > 0 && monk <= i && primclass != "monk") { secclass = "monk"; }
	if (secclass == primclass) { secclass="none"; }
	if (primclass=="ranger"||primclass=="cleric"||primclass=="paladin"||primclass=="druid"||primclass=="monk") deitychk = 0;
	if (secclass=="ranger"||secclass=="cleric"||secclass=="paladin"||secclass=="druid"||primclass=="monk") deitychk = 0;

	if (deitychk == 1) {

		switch (align) {
			case "lg": 
				if (primclass=="wizard") {deity="mystra";}
				else if (primclass=="sorcerer") {deity="mystra";}
				else if ((primclass=="ranger"||primclass=="druid")&&race=="gnome") 

{deity="baervan_wildwanderer";}
				else if (race=="gnome"&&(primclass=="fighter"||primclass=="paladin")) 

{deity="gaerdal_ironhand";}
				else if (race=="gnome") {deity="garl_glittergold";}
				else if (primclass=="ranger"||primclass=="druid") {deity="mielikki";}
				else if (race=="dwarf") {deity="moradin";}
				else if (race=="halfling") {deity="arvoreen";}
				else if (primclass=="bard") {deity="oghma";}
				else {deity="tyr";}
				break;
			case "ng":
				if (primclass=="wizard") {deity="mystra";}
				else if (primclass=="sorcerer") {deity="mystra";}
				else if (primclass=="bard") {deity="oghma";}
				else if ((primclass=="ranger"||primclass=="druid")&&race=="gnome") 

{deity="baervan_wildwanderer";}
				else if (race=="gnome") {deity="flandal_steelskin";}
				else if (primclass=="ranger"||primclass=="druid") {deity="mielikki";}
				else if (race=="dwarf") {deity="marthammor_duin";}
				else {deity="lathander";}
				break;
			case "cg":
				if (primclass=="wizard"&&(race=="halfelf"||race=="elf")) {deity="sehanine_moonbow";}
				else if (primclass=="wizard") {deity="mystra";}
				else if (primclass=="sorcerer") {deity="mystra";}
				else if ((primclass=="ranger"||primclass=="druid")&&race=="gnome") 

{deity="baervan_wildwanderer";}
				else if (primclass=="ranger"&&(race=="halfelf"||race=="elf")) {deity="solonor_thelandira";}
				else if (primclass=="druid"&&(race=="halfelf"||race=="elf")) {deity="rillifane_rallathil";}
				else if (primclass=="bard"&&(race=="halfelf"||race=="elf")) {deity="hanali_celanil";}
				else if (primclass=="bard") {deity="finder_wyvernspur";}
				else if (primclass=="ranger"||primclass=="druid") {deity="shaundakul";}
				else if (race=="dwarf") {deity="dugmaren_brightmantle";}
				else {deity="tymora";}
				break;
			case "ln":
				if (primclass=="rogue"&&race=="halfling") {deity="brandobaris";}
				else if (race=="halfling") {deity="urogalan";}
				else if (primclass=="ranger"||primclass=="druid") {deity="silvanus";}
				else if (primclass=="wizard") {deity="azuth";}
				else if (primclass=="sorcerer") {deity="azuth";}
				else if (race=="gnome") {deity="callarduran_smoothhands";}
				else {deity="helm";}
				break;
			case "nn":
				if (race=="dwarf") {deity="dumathoin";}
				else if (primclass=="rogue"&&race=="halfling") {deity="brandobaris";}
				else if (primclass=="wizard") {deity="azuth";}
				else if (primclass=="sorcerer") {deity="azuth";}
				else if (primclass=="ranger"||primclass=="druid") {deity="silvanus";}
				else if (race=="gnome") {deity="callarduran_smoothhands";}
				else if (race=="halfling") {deity="sheela_peryroyl";}
				else {deity="gond";}
				break;
			case "cn":
				if (race=="elf"&&(primclass=="rogue"||primclass=="bard")) {deity="erevan_ilesere";}
				else if (primclass=="wizard") {deity="azuth";}
				else if (primclass=="sorcerer") {deity="azuth";}
				else if (primclass=="ranger"||primclass=="druid") {deity="silvanus";}
				else if (race=="elf") {deity="fenmarel_mestarine";}
				else if (primclass=="bard") {deity="finder_wyvernspur";}
				else if (primclass=="rogue"&&race=="halfling") {deity="brandobaris";}
				else if (race=="halfling") {deity="sheela_peryroyl";}
				else if (race=="gnome") {deity="callarduran_smoothhands";}
				else if (primclass=="paladin"||primclass=="fighter") {deity="tempus";}
				else {deity="beshaba";}
				break;
			case "le":
				if (primclass=="wizard") {deity="velsharoon";}
				else if (primclass=="sorcerer") {deity="velsharoon";}
				else if (primclass=="rogue") {deity="mask";}
				else if (race=="dwarf") {deity="abbathor";}
				else if (race=="gnome") {deity="urdlen";}
				else {deity="iyachtu_xvim";}
				break;
			case "ne":
				if (primclass=="wizard") {deity="velsharoon";}
				else if (primclass=="sorcerer") {deity="velsharoon";}
				else if (primclass=="rogue") {deity="mask";}
				else if (race=="dwarf") {deity="abbathor";}
				else if (race=="gnome") {deity="urdlen";}
				else {deity="cyric";}
				break;
			case "ce":
				if (primclass=="wizard") {deity="velsharoon";}
				else if (primclass=="sorcerer") {deity="velsharoon";}
				else if (primclass=="rogue") {deity="mask";}
				else if (primclass=="bard") {deity="beshaba";}
				else if (race=="dwarf") {deity="abbathor";}
				else if (race=="gnome") {deity="urdlen";}
				else {deity="talos";}
		}
	}

	var win = window.open("", "win","width=900,height=550,top=25,left=50,toolbar=yes,menubar=yes,scrollbars=yes,resizable=yes,location=yes");

	with (win.document) {
		open("text/html", "replace");
			
		write("<html><head><link rel='stylesheet' type='text/css' href='surveystyle.css'><title>Your Results Are In!\<\/title>\<\/head>");
                write("<body text='#000000' link='#5555FF' vlink='#6666EE' bgcolor='#F2ECDA' background='http://neppyman.irulethe.net/bk299.gif'>");

		write("<center><h2><b><font color='#000000'>You Are A:\<\/font>\<\/b>\<\/h2>\<\/center>");
		write("<br><center><h1><b>");
                
		switch (align) {
			case "lg": write("Lawful Good "); break;
			case "ng": write("Neutral Good "); break;
			case "cg": write("Chaotic Good "); break;
			case "ln": write("Lawful Neutral "); break;
			case "nn": write("True Neutral "); break;
			case "cn": write("Chaotic Neutral "); break;
			case "le": write("Lawful Evil "); break;
			case "ne": write("Neutral Evil "); break;
			case "ce": write("Chaotic Evil "); }

		switch (race) {
			case "human": write("Human"); break;
			case "halfling": write("Halfling"); break;
			case "elf": write("Elf"); break;
			case "halfelf": write("Half-Elf"); break;
			case "gnome": write("Gnome"); break;
			case "halforc": write("Half-Orc"); break;
			case "dwarf": write("Dwarf"); }

		switch (primclass) {
			case "fighter": write(" Fighter"); break;
			case "ranger": write(" Ranger"); break;
			case "paladin": write(" Paladin"); break;
			case "cleric": write(" Cleric"); break;
			case "druid": write(" Druid"); break;
			case "monk": write(" Monk"); break;
			case "sorcerer": write(" Sorcerer"); break;
			case "rogue": write(" Rogue"); break;
			case "barbarian": write(" Barbarian"); break;
			case "wizard": write(" Wizard"); break;
			case "warlock": write (" Warlock"); break;
			case "bard": write(" Bard"); }

		switch (secclass) {
			case "fighter": write("/Fighter"); break;
			case "ranger": write("/Ranger"); break;
			case "paladin": write("/Paladin"); break;
			case "cleric": write("/Cleric"); break;
			case "druid": write("/Druid"); break;
			case "monk": write("/Monk"); break;
			case "none": write(""); break;
			case "sorcerer": write("/Sorcerer"); break;
			case "rogue": write("/Rogue"); break;
			case "barbarian": write("/Barbarian"); break;
			case "wizard": write("/Wizard"); break;
			case "warlock": write("/Warlock"); break;
			case "bard": write("/Bard"); }

if (secclass == "none") {
                if (level == 1){write(" (1st Level)");}
                if (level == 2){write(" (2nd Level)");}
                if (level == 3){write(" (3rd Level)");}
                if (level > 3){write(" (");}
                if (level > 3){write(level);}
                if (level > 3){write("th Level)");}
                        }

if (secclass !== "none") {
                if (level == 1){write(" (1st/1st Level)");}
                if (level == 2){write(" (1st/1st Level)");}
                if (level == 3){write(" (2nd/1st Level)");}
                if (level == 4){write(" (2nd/2nd Level)");}
                if (level == 5){write(" (3rd/2nd Level)");}
                if (level == 6){write(" (3rd/3rd Level)");}
                if (level == 7){write(" (4th/3rd Level)");}
                if (level == 8){write(" (4th/4th Level)");}
                if (level == 9){write(" (5th/4th Level)");}
                if (level == 10){write(" (5th/5th Level)");}
                         }

		write("\<\/h1>");

		if (deitychk==1) {

			write("<h2>Follower Of ");
			switch (deity) {
				case "tyr": write("Tyr"); break;
				case "arvoreen": write("Arvoreen"); break;
				case "moradin": write("Moradin"); break;
				case "lathander": write("Lathander"); break;
				case "mystra": write("Mystra"); break;
				case "oghma": write("Oghma"); break;
				case "mielikki": write("Mielikki"); break;
				case "marthammor_duin": write("Marthammor Duin"); break;
				case "tymora": write("Tymora"); break;
				case "finder_wyvernspur": write("Finder Wyvernspur"); break;
				case "shaundakul": write("Shaundakul"); break;
				case "hanali_celanil": write("Hanali Celanil"); break;
				case "solonor_thelandira": write("Solonor Thelandira"); break;
				case "rillifane_rallathil": write("Rillifane Rallathil"); break;
				case "helm": write("Helm"); break;
				case "azuth": write("Azuth"); break;
				case "urogalan": write("Urogalan"); break;
				case "gond": write("Gond"); break;
				case "silvanus": write("Silvanus"); break;
				case "sheela_peryroyl": write("Sheela Peryroyl"); break;
				case "brandobaris": write("Brandobaris"); break;
				case "dumathoin": write("Dumathoin"); break;
				case "beshaba": write("Beshaba"); break;
				case "tempus": write("Tempus"); break;
				case "fenmarel_mestarine": write("Fenmarel Mestarine"); break;
				case "erevan_ilesere": write("Erevan Ilesere"); break;
				case "iyachtu_xvim": write("Iyachtu Xvim"); break;
				case "cyric": write("Cyric"); break;
				case "mask": write("Mask"); break;
				case "abbathor": write("Abbathor"); break;
				case "velsharoon": write("Velsharoon"); break;
				case "talos": write("Talos"); break;
				case "garl_glittergold": write("Garl Glittergold"); break;
				case "gaerdal_ironhand": write("Gaerdal Ironhand"); break;
				case "baervan_wildwanderer": write("Baervan Wildwanderer"); break;
				case "flandal_steelskin": write("Flandal Steelskin"); break;
				case "callarduran_smoothhands": write("Calladuran Smoothhands"); break;
				case "urdlen": write("Urdlen");
			}
			write("\<\/h2>");
		}

		write("<br><br><u>");

		write("Ability Scores:\<\/u><br>");

		write("Strength-   ");
		write(strength);

		write("<br>");

		write("Dexterity-   ");
		write(dexterity);

		write("<br>");

		write("Constitution-   ");
		write(constitution);

		write("<br>");

		write("Intelligence-   ");
		write(intelligence);

		write("<br>");

		write("Wisdom-   ");
		write(wisdom);

		write("<br>");

		write("Charisma-   ");
		write(charisma);

		write("\<\/b>\<\/center><br><u>Alignment:\<\/u><br><b>");

		switch (align) {
			case "lg": write("Lawful Good-\<\/b> A lawful good character acts as a good person is expected or required to act. He combines a commitment to oppose evil with the discipline to fight relentlessly. He tells the truth, keeps his word, helps those in need, and speaks out against injustice. A lawful good character hates to see the guilty go unpunished.  Lawful good is the best alignment you can be because it combines honor and compassion.  However, lawful good can be a dangerous alignment when it restricts freedom and criminalizes self-interest."); break;
			case "ng": write("Neutral Good-\<\/b> A neutral good character does the best that a good person can do. He is devoted to helping others. He works with kings and magistrates but does not feel beholden to them. Neutral good is the best alignment you can be because it means doing what is good without bias for or against order. However, neutral good can be a dangerous alignment when it advances mediocrity by limiting the actions of the truly capable."); break;
			case "cg": write("Chaotic Good-\<\/b> A chaotic good character acts as his conscience directs him with little regard for what others expect of him. He makes his own way, but he's kind and benevolent. He believes in goodness and right but has little use for laws and regulations. He hates it when people try to intimidate others and tell them what to do. He follows his own moral compass, which, although good, may not agree with that of society. Chaotic good is the best alignment you can be because it combines a good heart with a free spirit. However, chaotic good can be a dangerous alignment when it disrupts the order of society and punishes those who do well for themselves."); break;
			case "ln": write("Lawful Neutral-\<\/b> A lawful neutral character acts as law, tradition, or a personal code directs him. Order and organization are paramount to him. He may believe in personal order and live by a code or standard, or he may believe in order for all and favor a strong, organized government. Lawful neutral is the best alignment you can be because it means you are reliable and honorable without being a zealot. However, lawful neutral can be a dangerous alignment when it seeks to eliminate all freedom, choice, and diversity in society."); break;
			case "nn": write("True Neutral-\<\/b> A true neutral character does what seems to be a good idea. He doesn't feel strongly one way or the other when it comes to good vs. evil or law vs. chaos. Most true neutral characters exhibit a lack of conviction or bias rather than a commitment to neutrality. Such a character thinks of good as better than evil after all, he would rather have good neighbors and rulers than evil ones. Still, he's not personally committed to upholding good in any abstract or universal way. Some true neutral characters, on the other hand, commit themselves philosophically to neutrality. They see good, evil, law, and chaos as prejudices and dangerous extremes. They advocate the middle way of neutrality as the best, most balanced road in the long run. True neutral is the best alignment you can be because it means you act naturally, without prejudice or compulsion. However, true neutral can be a dangerous alignment when it represents apathy, indifference, and a lack of conviction."); break;
			case "cn": write("Chaotic Neutral-\<\/b> A chaotic neutral character follows his whims. He is an individualist first and last. He values his own liberty but doesn't strive to protect others' freedom. He avoids authority, resents restrictions, and challenges traditions. A chaotic neutral character does not intentionally disrupt organizations as part of a campaign of anarchy. To do so, he would have to be motivated either by good (and a desire to liberate others) or evil (and a desire to make those different from himself suffer). A chaotic neutral character may be unpredictable, but his behavior is not totally random. He is not as likely to jump off a bridge as to cross it. Chaotic neutral is the best alignment you can be because it represents true freedom from both society's restrictions and a do-gooder's zeal. However, chaotic neutral can be a dangerous alignment when it seeks to eliminate all authority, harmony, and order in society."); break;
			case "le": write("Lawful Evil-\<\/b> A lawful evil villain methodically takes what he wants within the limits of his code of conduct without regard for whom it hurts. He cares about tradition, loyalty, and order but not about freedom, dignity, or life. He plays by the rules but without mercy or compassion. He is comfortable in a hierarchy and would like to rule, but is willing to serve. He condemns others not according to their actions but according to race, religion, homeland, or social rank. He is loath to break laws or promises.  This reluctance comes partly from his nature and partly because he depends on order to protect himself from those who oppose him on moral grounds. Some lawful evil villains have particular taboos, such as not killing in cold blood (but having underlings do it) or not letting children come to harm (if it can be helped). They imagine that these compunctions put them above unprincipled villains.  Some lawful evil people and creatures commit themselves to evil with a zeal like that of a crusader committed to good. Beyond being willing to hurt others for their own ends, they take pleasure in spreading evil as an end unto itself. They may also see doing evil as part of a duty to an evil deity or master. Lawful evil is sometimes called diabolical, because devils are the epitome of lawful evil. Lawful evil is the best alignment you can be because it combines honor and dedicated self-interest. However, lawful evil can be a dangerous alignment because it represents methodical, intentional, and frequently successful evil."); break;
			case "ne": write("Neutral Evil-\<\/b> A neutral evil villain does whatever he can get away with. He is out for himself, pure and simple. He sheds no tears for those he kills, whether for profit, sport, or convenience. He has no love of order and holds no illusion that following laws, traditions, or codes would make him any better or more noble. On the other hand, he doesn't have the restless nature or love of conflict that a chaotic evil villain has.  Some neutral evil villains hold up evil as an ideal, committing evil for its own sake. Most often, such villains are devoted to evil deities or secret societies. Neutral evil is the best alignment you can be because you can advance yourself without regard for others. However, neutral evil can be a dangerous alignment because it represents pure evil without honor and without variation."); break;
			case "ce": write("Chaotic Evil-\<\/b> A chaotic evil character does whatever his greed, hatred, and lust for destruction drive him to do. He is hot-tempered, vicious, arbitrarily violent, and unpredictable. If he is simply out for whatever he can get, he is ruthless and brutal. If he is committed to the spread of evil and chaos, he is even worse. Thankfully, his plans are haphazard, and any groups he joins or forms are poorly organized. Typically, chaotic evil people can be made to work together only by force, and their leader lasts only as long as he can thwart attempts to topple or assassinate him. Chaotic evil is sometimes called demonic because demons are the epitome of chaotic evil. Chaotic evil is the best alignment you can be because combines self-interest and pure freedom. However, chaotic evil can be a dangerous alignment because it represents the destruction not only of beauty and life but also of the order on which beauty and life depend."); }

		write("<br><br><u>Race:\<\/u><br><b>");

		switch (race) {
			case "human": write("Humans\<\/b> are the most adaptable of the common races. Short generations and a penchant for migration and conquest have made them physically diverse as well. Humans are often unorthodox in their dress, sporting unusual hairstyles, fanciful clothes, tattoos, and the like."); break;
			case "halfling": write("Halflings\<\/b> are clever, capable and resourceful survivors. They are notoriously curious and show a daring that many larger people can't match. They can be lured by wealth but tend to spend rather than hoard. They prefer practical clothing and would rather wear a comfortable shirt than jewelry. Halflings stand about 3 feet tall and commonly live to see 150."); break;
			case "elf": write("Elves\<\/b> are known for their poetry, song, and magical arts, but when danger threatens they show great skill with weapons and strategy. Elves can live to be over 700 years old and, by human standards, are slow to make friends and enemies, and even slower to forget them. Elves are slim and stand 4.5 to 5.5 feet tall. They have no facial or body hair, prefer comfortable clothes, and possess unearthly grace. Many others races find them hauntingly beautiful."); break;
			case "halfelf": write("Half-Elves\<\/b> have the curiosity and ambition for their human parent and the refined senses and love of nature of their elven parent, although they are outsiders among both cultures. To humans, half-elves are paler, fairer and smoother-skinned than their human parents, but their actual skin tones and other details vary just as human features do.  Half-elves tend to have green, elven eyes. They live to about 180."); break;
			case "gnome": write("Gnomes\<\/b> are in wide demand as alchemists, inventors, and technicians, though most prefer to remain among their own kind in simple comfort. Gnomes adore animals, gems, and jokes, especially pranks. They love to learn by personal experience, and are always trying new ways to build things. Gnomes stand 3 to 3.5 feet tall and live about 350 to 500 years."); break;
			case "halforc": write("Half-Orcs\<\/b> are the short-tempered and sullen result of human and orc pairings. They would rather act than ponder and would rather fight than argue. They love simple pleasures, such as feasting, boasting, and wild dancing. They are an asset at the right sort of party, but not at the duchess's grand ball. Half-orcs are as tall as humans but their brutish features betray their lineage.  They regard scars as tokens of pride and things of beauty. They rarely reach 75 years of age."); break;
			case "dwarf": write("Dwarves\<\/b> are known for their skill in warfare, their ability to withstand physical and magical punishment, their hard work, and their capacity for drinking ale. Dwarves are slow to jest and suspicious of strangers, but they are generous to those who earn their trust. They stand just 4 to 4.5 feet tall, but are broad and compactly built, almost as wide as they are tall. Dwarven men value their beards highly."); }

		write("<br><br><u>");

		if (secclass != "none") { write("Primary "); }

		write("Class:\<\/u><br><b>");

		switch (primclass) {
			case "fighter": write("Fighters-\<\/b> Fighters can be many things, from soldiers to criminal enforcers. Some see adventure as a way to get rich, while others use their skills to protect the innocent. Fighters have the best all-around fighting capabilities of the PC classes, and they are trained to use all standard weapons and armor. A fighter's rigorous martial training grants him many bonus feats as he progresses, and high-level fighters have access to special melee maneuvers and exotic weapons not available to any other character."); break;
			case "ranger": write("Rangers-\<\/b> Rangers are skilled stalkers and hunters who make their home in the woods. Their martial skill is nearly the equal of the fighter, but they lack the latter's dedication to the craft of fighting. Instead, the ranger focuses his skills and training on a specific enemy a type of creature he bears a vengeful grudge against and hunts above all others. Rangers often accept the role of protector, aiding those who live in or travel through the woods. His skills allow him to move quietly and stick to the shadows, especially in natural settings, and he also has special knowledge of certain types of creatures. Finally, an experienced ranger has such a tie to nature that he can actually draw on natural power to cast divine spells, much as a druid does, and like a druid he is often accompanied by animal companions. A ranger's Wisdom score should be high, as this determines the maximum spell level that he can cast."); break;
			case "paladin": write("Paladins-\<\/b> Paladins take their adventures seriously, and even a mundane mission is, in the heart of the paladin, a personal test an opportunity to demonstrate bravery, to learn tactics, and to find ways to do good. Divine power protects these warriors of virtue, warding off harm, protecting from disease, healing, and guarding against fear. The paladin can also direct this power to help others, healing wounds or curing diseases, and also use it to destroy evil. Experienced paladins can smite evil foes and turn away undead. A paladin's Wisdom score should be high, as this determines the maximum spell level that they can cast. Many of the paladin's special abilities also benefit from a high Charisma score."); break;
			case "cleric": write("Clerics-\<\/b> Clerics act as intermediaries between the earthly and the divine (or infernal) worlds. A good cleric helps those in need, while an evil cleric seeks to spread his patron's vision of evil across the world. All clerics can heal wounds and bring people back from the brink of death, and powerful clerics can even raise the dead. Likewise, all clerics have authority over undead creatures, and they can turn away or even destroy these creatures. Clerics are trained in the use of simple weapons, and can use all forms of armor and shields without penalty, since armor does not interfere with the casting of divine spells. In addition to his normal complement of spells, every cleric chooses to focus on two of his deity's domains. These domains grants the cleric special powers, and give him access to spells that he might otherwise never learn. A cleric's Wisdom score should be high, since this determines the maximum spell level that he can cast."); break;
			case "druid": write("Druids-\<\/b> Druids gain power not by ruling nature but by being at one with it. They hate the unnatural, including aberrations or undead, and destroy them where possible. Druids receive divine spells from nature, not the gods, and can gain an array of powers as they gain experience, including the ability to take the shapes of animals. The weapons and armor of a druid are restricted by their traditional oaths, not simply training. A druid's Wisdom score should be high, as this determines the maximum spell level that they can cast."); break;
			case "monk": write("Monks-\<\/b> Monks are versatile warriors skilled at fighting without weapons or armor. Good-aligned monks serve as protectors of the people, while evil monks make ideal spies and assassins. Though they don't cast spells, monks channel a subtle energy, called ki. This energy allows them to perform amazing feats, such as healing themselves, catching arrows in flight, and dodging blows with lightning speed. Their mundane and ki-based abilities grow with experience, granting them more power over themselves and their environment. Monks suffer unique penalties to their abilities if they wear armor, as doing so violates their rigid oath. A monk wearing armor loses their Wisdom and level based armor class bonuses, their movement speed, and their additional unarmed attacks per round."); break;
			case "wizard": write("Wizards-\<\/b> Wizards are arcane spellcasters who depend on intensive study to create their magic. To wizards, magic is not a talent but a difficult, rewarding art. When they are prepared for battle, wizards can use their spells to devastating effect. When caught by surprise, they are vulnerable. The wizard's strength is her spells, everything else is secondary. She learns new spells as she experiments and grows in experience, and she can also learn them from other wizards. In addition, over time a wizard learns to manipulate her spells so they go farther, work better, or are improved in some other way. A wizard can call a familiar- a small, magical, animal companion that serves her. With a high Intelligence, wizards are capable of casting very high levels of spells."); break;
			case "barbarian": write("Barbarians-\<\/b> Barbarians are brave, even reckless, and their warrior skills make them well suited to adventure. Instead of training and discipline, barbarians have a powerful rage that makes them stronger, tougher, and better able to withstand attacks. They only have the energy for a few such displays per day, but it is usually sufficient. Constant exposure to danger has also given barbarians a sort of 'sixth sense,' the preternatural ability to sense danger and dodge attacks, and their running stamina is legendary."); break;
			case "rogue": write("Rogues-\<\/b> Rogues have little in common with each other. While some - maybe even the majority - are stealthy thieves, many serve as scouts, spies, investigators, diplomats, and simple thugs. Rogues are versatile, adaptable, and skilled at getting what others don't want them to get. While not equal to a fighter in combat, a rogue knows how to hit where it hurts, and a sneak attack can dish out a lot of damage. Rogues also seem to have a sixth sense when it comes to avoiding danger. Experienced rogues develop nearly magical powers and skills as they master the arts of stealth, evasion, and sneak attacks. In addition, while not capable of casting spells on their own, a rogue can sometimes 'fake it' well enough to cast spells from scrolls, activate wands, and use just about any other magic item."); break;
			case "sorcerer": write("Sorcerers-\<\/b> Sorcerers are arcane spellcasters who manipulate magic energy with imagination and talent rather than studious discipline. They have no books, no mentors, no theories just raw power that they direct at will. Sorcerers know fewer spells than wizards do and acquire them more slowly, but they can cast individual spells more often and have no need to prepare their incantations ahead of time. Also unlike wizards, sorcerers cannot specialize in a school of magic. Since sorcerers gain their powers without undergoing the years of rigorous study that wizards go through, they have more time to learn fighting skills and are proficient with simple weapons. Charisma is very important for sorcerers; the higher their value in this ability, the higher the spell level they can cast."); break;
			case "warlock": write("Warlocks-\<\/b> Warlocks are driven by an insatiable need for knowledge and power, which compels them to enter into a pact with an otherworldly being.  Sometimes the relationship between a warlock and their patron is like that of a cleric and a deity, though the beings that serve as patrons to warlocks are not gods.  A warlock might lead a cult dedicated to a fey prince, an archdevil, or an utterly alien entity - beings not typically served by clerics.  More often, though, the arrangement is similar to that between a master and an apprentice.  The warlock learns and grows in power, at the cost of occasional services performed on the patron's behalf."); break; 
			case "bard": write("Bards-\<\/b> Bards often serve as negotiators, messengers, scouts, and spies. They love to accompany heroes (and villains) to witness heroic (or villainous) deeds firsthand, since a bard who can tell a story from personal experience earns renown among his fellows. A bard casts arcane spells without any advance preparation, much like a sorcerer. Bards also share some specialized skills with rogues, and their knowledge of item lore is nearly unmatched. A high Charisma score allows a bard to cast high-level spells."); }

		if (secclass != "none") { write("<br><br><u>Secondary Class:\<\/u><br><b>"); }

		switch (secclass) {
			case "fighter": write("Fighters-\<\/b> Fighters can be many things, from soldiers to criminal enforcers. Some see adventure as a way to get rich, while others use their skills to protect the innocent. Fighters have the best all-around fighting capabilities of the PC classes, and they are trained to use all standard weapons and armor. A fighter's rigorous martial training grants him many bonus feats as he progresses, and high-level fighters have access to special melee maneuvers and exotic weapons not available to any other character."); break;
			case "ranger": write("Rangers-\<\/b> Rangers are skilled stalkers and hunters who make their home in the woods. Their martial skill is nearly the equal of the fighter, but they lack the latter's dedication to the craft of fighting. Instead, the ranger focuses his skills and training on a specific enemy a type of creature he bears a vengeful grudge against and hunts above all others. Rangers often accept the role of protector, aiding those who live in or travel through the woods. His skills allow him to move quietly and stick to the shadows, especially in natural settings, and he also has special knowledge of certain types of creatures. Finally, an experienced ranger has such a tie to nature that he can actually draw on natural power to cast divine spells, much as a druid does, and like a druid he is often accompanied by animal companions. A ranger's Wisdom score should be high, as this determines the maximum spell level that he can cast."); break;
			case "paladin": write("Paladins-\<\/b> Paladins take their adventures seriously, and even a mundane mission is, in the heart of the paladin, a personal test an opportunity to demonstrate bravery, to learn tactics, and to find ways to do good. Divine power protects these warriors of virtue, warding off harm, protecting from disease, healing, and guarding against fear. The paladin can also direct this power to help others, healing wounds or curing diseases, and also use it to destroy evil. Experienced paladins can smite evil foes and turn away undead. A paladin's Wisdom score should be high, as this determines the maximum spell level that they can cast. Many of the paladin's special abilities also benefit from a high Charisma score."); break;
			case "cleric": write("Clerics-\<\/b> Clerics act as intermediaries between the earthly and the divine (or infernal) worlds. A good cleric helps those in need, while an evil cleric seeks to spread his patron's vision of evil across the world. All clerics can heal wounds and bring people back from the brink of death, and powerful clerics can even raise the dead. Likewise, all clerics have authority over undead creatures, and they can turn away or even destroy these creatures. Clerics are trained in the use of simple weapons, and can use all forms of armor and shields without penalty, since armor does not interfere with the casting of divine spells. In addition to his normal complement of spells, every cleric chooses to focus on two of his deity's domains. These domains grants the cleric special powers, and give him access to spells that he might otherwise never learn. A cleric's Wisdom score should be high, since this determines the maximum spell level that he can cast."); break;
			case "druid": write("Druids-\<\/b> Druids gain power not by ruling nature but by being at one with it. They hate the unnatural, including aberrations or undead, and destroy them where possible. Druids receive divine spells from nature, not the gods, and can gain an array of powers as they gain experience, including the ability to take the shapes of animals. The weapons and armor of a druid are restricted by their traditional oaths, not simply training. A druid's Wisdom score should be high, as this determines the maximum spell level that they can cast."); break;
			case "monk": write("Monks-\<\/b> Monks are versatile warriors skilled at fighting without weapons or armor. Good-aligned monks serve as protectors of the people, while evil monks make ideal spies and assassins. Though they don't cast spells, monks channel a subtle energy, called ki. This energy allows them to perform amazing feats, such as healing themselves, catching arrows in flight, and dodging blows with lightning speed. Their mundane and ki-based abilities grow with experience, granting them more power over themselves and their environment. Monks suffer unique penalties to their abilities if they wear armor, as doing so violates their rigid oath. A monk wearing armor loses their Wisdom and level based armor class bonuses, their movement speed, and their additional unarmed attacks per round."); break;
			case "wizard": write("Wizards-\<\/b> Wizards are arcane spellcasters who depend on intensive study to create their magic. To wizards, magic is not a talent but a difficult, rewarding art. When they are prepared for battle, wizards can use their spells to devastating effect. When caught by surprise, they are vulnerable. The wizard's strength is her spells, everything else is secondary. She learns new spells as she experiments and grows in experience, and she can also learn them from other wizards. In addition, over time a wizard learns to manipulate her spells so they go farther, work better, or are improved in some other way. A wizard can call a familiar- a small, magical, animal companion that serves her. With a high Intelligence, wizards are capable of casting very high levels of spells."); break;
			case "barbarian": write("Barbarians-\<\/b> Barbarians are brave, even reckless, and their warrior skills make them well suited to adventure. Instead of training and discipline, barbarians have a powerful rage that makes them stronger, tougher, and better able to withstand attacks. They only have the energy for a few such displays per day, but it is usually sufficient. Constant exposure to danger has also given barbarians a sort of 'sixth sense,' the preternatural ability to sense danger and dodge attacks, and their running stamina is legendary."); break;
			case "rogue": write("Rogues-\<\/b> Rogues have little in common with each other. While some - maybe even the majority - are stealthy thieves, many serve as scouts, spies, investigators, diplomats, and simple thugs. Rogues are versatile, adaptable, and skilled at getting what others don't want them to get. While not equal to a fighter in combat, a rogue knows how to hit where it hurts, and a sneak attack can dish out a lot of damage. Rogues also seem to have a sixth sense when it comes to avoiding danger. Experienced rogues develop nearly magical powers and skills as they master the arts of stealth, evasion, and sneak attacks. In addition, while not capable of casting spells on their own, a rogue can sometimes 'fake it' well enough to cast spells from scrolls, activate wands, and use just about any other magic item."); break;
			case "sorcerer": write("Sorcerers-\<\/b> Sorcerers are arcane spellcasters who manipulate magic energy with imagination and talent rather than studious discipline. They have no books, no mentors, no theories just raw power that they direct at will. Sorcerers know fewer spells than wizards do and acquire them more slowly, but they can cast individual spells more often and have no need to prepare their incantations ahead of time. Also unlike wizards, sorcerers cannot specialize in a school of magic. Since sorcerers gain their powers without undergoing the years of rigorous study that wizards go through, they have more time to learn fighting skills and are proficient with simple weapons. Charisma is very important for sorcerers; the higher their value in this ability, the higher the spell level they can cast."); break;
			case "warlock": write("Warlocks-\<\/b> Warlocks are driven by an insatiable need for knowledge and power, which compels them to enter into a pact with an otherworldly being.  Sometimes the relationship between a warlock and their patron is like that of a cleric and a deity, though the beings that serve as patrons to warlocks are not gods.  A warlock might lead a cult dedicated to a fey prince, an archdevil, or an utterly alien entity - beings not typically served by clerics.  More often, though, the arrangement is similar to that between a master and an apprentice.  The warlock learns and grows in power, at the cost of occasional services performed on the patron's behalf."); break; 
			case "bard": write("Bards-\<\/b> Bards often serve as negotiators, messengers, scouts, and spies. They love to accompany heroes (and villains) to witness heroic (or villainous) deeds firsthand, since a bard who can tell a story from personal experience earns renown among his fellows. A bard casts arcane spells without any advance preparation, much like a sorcerer. Bards also share some specialized skills with rogues, and their knowledge of item lore is nearly unmatched. A high Charisma score allows a bard to cast high-level spells."); }

		if (deitychk==1) {

		write("<br><br><u>Deity:\<\/u><br><b>");

		switch (deity) {
			case "tyr": write("Tyr\<\/b> is the Lawful Good god of justice.  He is also known as Tyr Grimjaws, Wounded Tyr, the Maimed God, and Blind Tyr.  He appears as a warrior, missing his hand.  Followers of Tyr are concerned first and foremost with justice - discovering the truth and punishing the guilty for their crimes.  They wear blue and purple robes with a white sash, a white gauntlet on the left hand, and a black gauntlet on the right, to symbolize Tyr's lost hand.  Their preferred weapon is the warhammer.  Tyr's symbol is a set of scales resting on a warhammer."); break;
			case "arvoreen": write("Arvoreen\<\/b> is the Lawful Good halfling god of war, defense, and vigilance.  He is also known as the Defender and the Vigilant Guardian.  Followers of Arvoreen are devoted to the defense of the halfling race, and spend their days drilling and preparing other halflings for the defense of their homes, if necessary.  Their preferred weapon is the short sword.  Arvoreen's symbol is a pair of crossed short swords."); break;
			case "moradin": write("Moradin\<\/b> is the Lawful Good dwarven god of stone, rock, fire, and metal.  He is also known as the Creator God, because he is the creator of the dwarven race.  Followers of Moradin believe that a person's worth is determined by the things they do.  They also are trained to work in the forge, creating weapons in the name and spirit of Moradin.  They can use any weapon, but it must be one that they have created themselves.  Moradin's symbol is a hammer and an anvil."); break;
			case "lathander": write("Lathander\<\/b> is the Neutral Good god of spring, dawn, birth, and renewal.  His followers believe in new beginnings, and work for the betterment of all.  They have no preferred weapon, but they typically wear plate mail and a shield, with red and yellow tinting.  Lathander's symbol is rosy pink disk, typically cut from rose quartz."); break;
			case "mystra": write("Mystra\<\/b> is the Neutral Good goddess of magic.  She is also known as the Lady of Mysteries.  Followers of Mystra wear armor and carry shields with her symbol on them.  Mystra's symbol is a ring of stars."); break;
			case "oghma": write("Oghma\<\/b> is the Neutral Good god of knowledge and invention.  He is also known as the Binder of What is Known, and is the Patron of Bards.  His followers believe that knowledge reigns supreme, and is the basis for everything else that is done.  They wear white shirts and pants, with a black and gold braided vest, and a small, box-like hat.  All priests of Oghma are known as Loremasters.  Oghma's symbol is a scroll."); break;
			case "mielikki": write("Mielikki\<\/b> is the Neutral Good goddess of the forest and autumn.  She is also known as the Lady of the Forest, and is the Patron of Rangers.  Her followers are devoted to nature, and believe in the positive and outreaching elements of it.  They use light armor, and a variety of weapons suitable for hunting, which they are quite skilled at.  Mielikki's symbol is a unicorn head."); break;
			case "marthammor_duin": write("Marthammor Duin\<\/b> is the Neutral Good dwarven god of protection and travel.  He is also known as the Finder of Trails, the Watcher over Wanderers, the Watchful Eye, and the Wanderer.  His followers are also wanderers, and are open to new ideas far more than most dwarves.  They are typically guides or scouts.  Their preferred weapon is the heavy mace.  Marthammor Duin's symbol is an upright mace in front of a fur-trimmed leather boot."); break;
			case "tymora": write("Tymora\<\/b> is the Chaotic Good goddess of luck and good fortune.  She is also known as Lady Luck, and also Tyche's fair-tressed daughter.  Followers of Tymora believe in the tenent that, 'Fortune Favors the Bold,' and will throw caution to the wind and trust to luck to work things out for the best.  Tymora's symbol is an unmarked silver disk."); break;
			case "finder_wyvernspur": write("Finder Wyvernspur\<\/b> is the Chaotic Neutral god of the cycle of life and the transformation of art, although he leans heavily towards Good.  He is also known as the Nameless Bard.  Followers of Finder believe that everything must change in order to grow and thrive.  Their preferred weapon is the bastard sword."); break;
			case "shaundakul": write("Shaundakul\<\/b> is the Chaotic Good god of travel and exploration.  He is also known as the Rider of the Winds.  His followers are typically rangers, and work to protect the land.  They typically wear leather armor, and carry long swords and short bows.  Shaundakul's symbol is a white hand with the index finger raised."); break;
			case "hanali_celanil": write("Hanali Celanil\<\/b> is the Chaotic Good elven goddess of love, beauty, and art.  She is also known as the Heart of Gold and Lady Goldheart.  Her followers delight in creation and youth, and work to spread happiness, love, and beauty.  Their preferred weapon is the dagger."); break;
			case "solonor_thelandira": write("Solonor Thelandira\<\/b> is the Chaotic Good elven god of archery and the hunt.  He is also known as the Keen Eye, the Great Archer, and the Forest Hunter.  His followers respect nature, and only hunt when needed, but are quick to defend the forest from intruders.  Their favorite weapon is the bow, and they tend to be extremely talented with it.  Solonor Thelandira's symbol is an arrow with green fletchings."); break;
			case "rillifane_rallathil": write("Rillifane Rallathil\<\/b> is the Chaotic Good elven god of woodlands and nature.  He is also known as the Leaflord, the Wild One, and the Great Oak.  He is appears as a huge oak tree.  His followers believe that everyone should be free to spend their lives doing what nature has meant them to, and they protect the forests from those who would abuse them.  Their preferred weapon is the quarterstaff.  Rillifane Rallathil's symbol is an oak tree."); break;
			case "helm": write("Helm\<\/b> is the Lawful Neutral god of guardians and protectors.  His followers believe in vigilance and preparedness, and are always ready for whatever confronts them.  They wear plate mail, sometimes with gold embossing, with an open eye set into the breastplate, and an open-faced helmet.  Helm's symbol is an open eye in a gauntlet."); break;
			case "azuth": write("Azuth\<\/b> is the Lawful Neutral god of wizards and mages.  He is also known as the High One, and is the Patron of Wizards.  His followers believe that a systematic approach to magic is the best, and they strive for calm and caution in order to avoid accidents.  They wear shimmering robes, and are well-versed in magic, as well as typical priest spells.  Azuth's symbol is a hand with a raised, glowing index finger."); break;
			case "urogalan": write("Urogalan\<\/b> is the Lawful Neutral halfling god of death and earth.  He is also known as He Who Must Be and the Lord in the Earth.  His followers guard the dead and protect halflings from those that don't stay buried.  Their preferred weapon is the flail.  Urogalan's symbol is a silhouette of a dog's head."); break;
			case "gond": write("Gond\<\/b> is the True Neutral god of artifice, craft, and construction.  He is also known as Gond Wonderbringer.  His followers believe that 'actions count' - that is, that what is accomplished in the end is what is truly important.  They wear saffron clothing, with red sashes containing all manner of mechanical devices.  Their preferred weapons are firearms, since the followers of Gond had a large hand in their making and invention.  They also wear plate mail (no shield), but generally prefer to have bodyguards, instead.  Gond's symbol is a toothed wheel, made of ivory, bone, or metal."); break;
			case "silvanus": write("Silvanus\<\/b> is the True Neutral god of nature.  He is also known as the Patron of Druids.  His followers believe in the perfect balance of nature, and believe that nature's bounty is preferable to any other 'civilizing' method.  They wear leather or metallic scale mail, constructed of leaf-shaped scales.  Silvanus's symbol is an oak leaf."); break;
			case "sheela_peryroyl": write("Sheela Peryroyl\<\/b> is the True Neutral halfling goddess of nature, agriculture, beauty, and romantic love.  She is also known as the Green Sister and the Watchful Mother.  She appears as a halfling dressed in wildflowers.  Her followers work to preserve nature's beauty and also cultivate wilderness areas for halflings to settle.  They also have feasts and parties, where romance and revelry are encouraged.  Their preferred weapon is the sickle.  They typically wear a small flower in their hair.  Sleeha Peryroyl's symbol is the daisy."); break;
			case "brandobaris": write("Brandobaris\<\/b> is the True Neutral halfling god of stealth, adventuring, and thievery.  He is also known as the Master of Stealth, the Trickster, and the Irrepressible Scamp.  His followers are always on the lookout for an adventure, and try to make a profit, but avoid greed.  Their preferred weapon is the dagger.  Brandobaris's symbol is an open, round door."); break;
			case "dumathoin": write("Dumathoin\<\/b> is the True Neutral dwarven god of buried wealth, ores, gems, and mining.  He is also known as the Keeper of Secrets under the Mountain.  His followers are typically miners and explorers, but also respect the beauty of the earth.  They also stand guard over the dwarven dead.  Their preferred weapon is the maul.  Dumathoin's symbol is a faceted gem set inside a mountain peak."); break;
			case "beshaba": write("Beshaba\<\/b> is the Chaotic Evil goddess of bad luck, accidents, and mischief.  She is also known as the Maid of Misfortune, and also Tyche's unpleasant daughter.  Followers of Beshaba believe that bad things happen to everyone, and only by praying to Beshaba will you have a chance of being spared.  Her symbol is a set of black deer's antlers inset on a red triangle."); break;
			case "tempus": write("Tempus\<\/b> is the Chaotic Neutral god of war.  He is also known as the Lord of Battle and the Foehammer.  His followers believe in the glory and joy of battle, and are never far from it.  They typically wear battered armor, and carry a variety of weapons, but do not use missile weapons.  Tempus's symbol is a flaming sword."); break;
			case "fenmarel_mestarine": write("Fenmarel Mestarine\<\/b> is the Chaotic Neutral elven god of outcasts and isolation.  He is also known as the Lone Wolf.  His followers are outcasts (either by force or by choice) from elven society, and believe in being self-sufficient.  Their preferred weapon is the dagger.  Fenmarel Mestarine's symbol is a pair of elven eyes in the darkness."); break;
			case "erevan_ilesere": write("Erevan Ilesere\<\/b> is the Chaotic Neutral elven god of mischief and rogues.  He is also known as the Trickster and the Chameleon.  His followers are always looking for fun and adventure, and are notorious pranksters.  Their favorite weapon is the short sword.  Erevan Ilesere's symbol is a nova star with asymmetric rays."); break;
			case "iyachtu_xvim": write("Iyachtu Xvim\<\/b> is the Lawful Evil god of fear, hatred, malice, and tyranny.  He is also known as the Godson and the Son of Bane.  He appears as a gaunt, naked, scimitar-wielding man, or as a black cloud with glowing green eyes.  His followers are working to strengthen his position in the world by converting (often by force) other deities' worshippers.  They wear black robes with dark green trim, and wear black iron gauntlets with green eyes on the backs.  Iyachtu Xvim's symbol is a black hand, inset with green eyes."); break;
			case "cyric": write("Cyric\<\/b> is the Neutral Evil god of death, murder, the dead, strife, tyranny, deception, and illusion.  His followers are working to secure his position as a new god, and are in conflict with many worshippers of other deities.  They wear black or dark purple robes, with silver trimming, and wear silver bracelets.  Cyric's symbol is a skull set in a purple starburst."); break;
			case "mask": write("Mask\<\/b> is the Neutral Evil god of rogues, thieves.  He is also known as the Lord of Shadows.  He appears as a lithe man, shadowed, wearing dark clothing.  His followers believe in stealth and wariness.  They wear black and gray clothing, and carry weapons and armor similar to that of a thief.  They frequently wear masks to conceal their identity.  Mask's symbol is a dark, checkered mask."); break;
			case "abbathor": write("Abbathor\<\/b> is the Neutral Evil dwarven god of greed.  He is also known as the Great Master of Greed, the Trove Lord, and the Avaricious.  His followers believe in the gaining of riches and wealth by any means necessary.  Their preferred weapon is the dagger.  Abbathor's symbol is a jeweled dagger."); break;
			case "velsharoon": write("Velsharoon\<\/b> is the Neutral Evil god of necromancy, liches, and undeath.  He is also known as the Vaunted, the Archmage of Necromancy, and the Lord of the Forgotten Crypt.  His followers practice the necromantic arts, and raise the dead to do their bidding.  His symbol is a crowned skull."); break;
			case "talos": write("Talos\<\/b> is the Chaotic Evil god of storms, forest fires, earthquakes, tornadoes, and destruction in general.  He is also known as the Destroyer.  His followers fear him more than worship him, and they revel in the destructive fury of nature - while praying to be spared from its wrath.  Talos's symbol is three lightning bolts, of different colors, coming from a central point."); break;
			case "garl_glittergold": write("Garl Glittergold\<\/b> is the Lawful Good gnomish god of mischief, cleverness, battle, and gemstones.  He is also known as the Joker, the Watchful Protector, the Priceless Gem, the Sparkling Wit, and the God of Gnomes, as he is the head of their pantheon.  His followers enjoy a good laugh and a good prank, perhaps even more so than a normal gnome, but also work to make the world a better place.  They are extremely fond of gems.  Their preferreed weapon is the battleaxe."); break;
			case "gaerdal_ironhand": write("Gaerdal Ironhand\<\/b> is the Lawful Good gnomish god of vigilance and combat.  He is also known as the Stern and the Shield of the Golden Hills.  His followers work to defend the homes of the gnomish race, and practice the arts of war and train others to do the same.  They are somewhat isolated from the generally fun-loving gnomes, because they take their duties very seriously.  Their preferred weapon is the warhammer."); break;
			case "baervan_wildwanderer": write("Baervan Wildwanderer\<\/b> is the Neutral Good gnomish god of forests, travel, and nature.  He is also known as the Masked Leaf.  His avatar is always accompanied by an intelligent, giant raccoon, named Chiktikka Fastpaws.  His followers, like him, enjoy the outdoors and work to protect it and guard those who also enjoy it.  Their preferred weapon is the halfspear."); break;
			case "flandal_steelskin": write("Flandal Steelskin\<\/b> is the Neutral Good gnomish god of mining, physical fitness, metalworking, and smithing.  He is also known as the Master of Metal, the Lord of Smiths,  and the Great Steelsmith.  His worshippers are frequently miners or smiths, and believe in the value of metalworking, and also in the value of physical strength.  Their preferred weapon is the warhammer."); break;
			case "callarduran_smoothhands": write("Callarduran Smoothhands\<\/b> is the True Neutral gnomish god of stone, the underground, and mining.  He is also known as the Deep Brother and the Master of Stone.  His followers enjoy mining - especially for rubies.  Their favorite weapon is the battleaxe."); break;
			case "urdlen": write("Urdlen\<\/b> is the Chaotic Evil gnomish god of greed, bloodlust, and hatred.  It is also known as the Crawler Below.  Urdlen is generally represented as a huge, furless mole with sharp claws.  His followers have changed their love of pranks and jokes to a love of malicious schemes and general evildoing.  Their favored weapon is the claw bracer."); }
		}

		if (survey.html.checked) {

		write("<br><br><hr><br><u>Web page and journal code\<\/u>:  Copy and paste the following:<br><br>");

		write("<center><table border=0 cellspacing=0 cellpadding=3 width=700><tr><td><samp>");

		write("&lt;b>I Am A:&lt;/b> ");

		switch (align) {
			case "lg": write("Lawful Good "); break;
			case "ng": write("Neutral Good "); break;
			case "cg": write("Chaotic Good "); break;
			case "ln": write("Lawful Neutral "); break;
			case "nn": write("True Neutral "); break;
			case "cn": write("Chaotic Neutral "); break;
			case "le": write("Lawful Evil "); break;
			case "ne": write("Neutral Evil "); break;
			case "ce": write("Chaotic Evil "); }

		switch (race) {
			case "human": write("Human "); break;
			case "halfling": write("Halfling "); break;
			case "elf": write("Elf "); break;
			case "halfelf": write("Half-Elf "); break;
			case "gnome": write("Gnome "); break;
			case "halforc": write("Half-Orc "); break;
			case "dwarf": write("Dwarf "); }

		switch (primclass) {
			case "fighter": write("Fighter"); break;
			case "ranger": write("Ranger"); break;
			case "paladin": write("Paladin"); break;
			case "mage": write("Mage"); break;
			case "cleric": write("Cleric"); break;
			case "druid": write("Druid"); break;
			case "thief": write("Thief"); break;
			case "sorcerer": write("Sorcerer"); break;
			case "rogue": write("Rogue"); break;
			case "barbarian": write("Barbarian"); break;
			case "wizard": write("Wizard"); break;
			case "warlock": write("Warlock"); break;
			case "bard": write("Bard"); }

		switch (secclass) {
			case "fighter": write("/Fighter"); break;
			case "ranger": write("/Ranger"); break;
			case "paladin": write("/Paladin"); break;
			case "mage": write("/Mage"); break;
			case "cleric": write("/Cleric"); break;
			case "druid": write("/Druid"); break;
			case "thief": write("/Thief"); break;
			case "sorcerer": write("/Sorcerer "); break;
			case "rogue": write("/Rogue "); break;
			case "barbarian": write("/Barbarian "); break;
			case "wizard": write("/Wizard "); break;
			case "warlock": write("/Warlock "); break;
			case "bard": write("/Bard"); }

if (secclass == "none") {
                if (level == 1){write(" (1st Level)");}
                if (level == 2){write(" (2nd Level)");}
                if (level == 3){write(" (3rd Level)");}
                if (level > 3){write(" (");}
                if (level > 3){write(level);}
                if (level > 3){write("th Level)");}
                        }

if (secclass !== "none") {
                if (level == 1){write(" (1st/1st Level)");}
                if (level == 2){write(" (1st/1st Level)");}
                if (level == 3){write(" (2nd/1st Level)");}
                if (level == 4){write(" (2nd/2nd Level)");}
                if (level == 5){write(" (3rd/2nd Level)");}
                if (level == 6){write(" (3rd/3rd Level)");}
                if (level == 7){write(" (4th/3rd Level)");}
                if (level == 8){write(" (4th/4th Level)");}
                if (level == 9){write(" (5th/4th Level)");}
                if (level == 10){write(" (5th/5th Level)");}
                         }

		write("<br>&lt;br>&lt;br>&lt;u>Ability Scores:&lt;/u>&lt;br>");

		write("<br>&lt;b>Strength-&lt;/b>");
		write(strength);
		write("&lt;br>");

		write("<br>&lt;b>Dexterity-&lt;/b>");
		write(dexterity);
		write("&lt;br>");

		write("<br>&lt;b>Constitution-&lt;/b>");
		write(constitution);
		write("&lt;br>");

		write("<br>&lt;b>Intelligence-&lt;/b>");
		write(intelligence);
		write("&lt;br>");

		write("<br>&lt;b>Wisdom-&lt;/b>");
		write(wisdom);

		write("&lt;br>");
		write("<br>&lt;b>Charisma-&lt;/b>");
		write(charisma);

		write("<br>&lt;br>&lt;br>&lt;u>Alignment:&lt;/u>&lt;br>&lt;b>");

		switch (align) {
			case "lg": write("Lawful Good&lt;/b> A lawful good character acts as a good person is expected or required to act. He combines a commitment to oppose evil with the discipline to fight relentlessly. He tells the truth, keeps his word, helps those in need, and speaks out against injustice. A lawful good character hates to see the guilty go unpunished.  Lawful good is the best alignment you can be because it combines honor and compassion.  However, lawful good can be a dangerous alignment when it restricts freedom and criminalizes self-interest."); break;
			case "ng": write("Neutral Good&lt;/b> A neutral good character does the best that a good person can do. He is devoted to helping others. He works with kings and magistrates but does not feel beholden to them. Neutral good is the best alignment you can be because it means doing what is good without bias for or against order. However, neutral good can be a dangerous alignment when it advances mediocrity by limiting the actions of the truly capable."); break;
			case "cg": write("Chaotic Good&lt;/b> A chaotic good character acts as his conscience directs him with little regard for what others expect of him. He makes his own way, but he's kind and benevolent. He believes in goodness and right but has little use for laws and regulations. He hates it when people try to intimidate others and tell them what to do. He follows his own moral compass, which, although good, may not agree with that of society. Chaotic good is the best alignment you can be because it combines a good heart with a free spirit. However, chaotic good can be a dangerous alignment when it disrupts the order of society and punishes those who do well for themselves."); break;
 			case "ln": write("Lawful Neutral&lt;/b> A lawful neutral character acts as law, tradition, or a personal code directs him. Order and organization are paramount to him. He may believe in personal order and live by a code or standard, or he may believe in order for all and favor a strong, organized government. Lawful neutral is the best alignment you can be because it means you are reliable and honorable without being a zealot. However, lawful neutral can be a dangerous alignment when it seeks to eliminate all freedom, choice, and diversity in society."); break;
 			case "nn": write("True Neutral&lt;/b> A true neutral character does what seems to be a good idea. He doesn't feel strongly one way or the other when it comes to good vs. evil or law vs. chaos. Most true neutral characters exhibit a lack of conviction or bias rather than a commitment to neutrality. Such a character thinks of good as better than evil after all, he would rather have good neighbors and rulers than evil ones. Still, he's not personally committed to upholding good in any abstract or universal way. Some true neutral characters, on the other hand, commit themselves philosophically to neutrality. They see good, evil, law, and chaos as prejudices and dangerous extremes. They advocate the middle way of neutrality as the best, most balanced road in the long run. True neutral is the best alignment you can be because it means you act naturally, without prejudice or compulsion. However, true neutral can be a dangerous alignment when it represents apathy, indifference, and a lack of conviction."); break;
			case "cn": write("Chaotic Neutral&lt;/b> A chaotic neutral character follows his whims. He is an individualist first and last. He values his own liberty but doesn't strive to protect others' freedom. He avoids authority, resents restrictions, and challenges traditions. A chaotic neutral character does not intentionally disrupt organizations as part of a campaign of anarchy. To do so, he would have to be motivated either by good (and a desire to liberate others) or evil (and a desire to make those different from himself suffer). A chaotic neutral character may be unpredictable, but his behavior is not totally random. He is not as likely to jump off a bridge as to cross it. Chaotic neutral is the best alignment you can be because it represents true freedom from both society's restrictions and a do-gooder's zeal. However, chaotic neutral can be a dangerous alignment when it seeks to eliminate all authority, harmony, and order in society."); break;
			case "le": write("Lawful Evil&lt;/b> A lawful evil villain methodically takes what he wants within the limits of his code of conduct without regard for whom it hurts. He cares about tradition, loyalty, and order but not about freedom, dignity, or life. He plays by the rules but without mercy or compassion. He is comfortable in a hierarchy and would like to rule, but is willing to serve. He condemns others not according to their actions but according to race, religion, homeland, or social rank. He is loath to break laws or promises.  This reluctance comes partly from his nature and partly because he depends on order to protect himself from those who oppose him on moral grounds. Some lawful evil villains have particular taboos, such as not killing in cold blood (but having underlings do it) or not letting children come to harm (if it can be helped). They imagine that these compunctions put them above unprincipled villains.  Some lawful evil people and creatures commit themselves to evil with a zeal like that of a crusader committed to good. Beyond being willing to hurt others for their own ends, they take pleasure in spreading evil as an end unto itself. They may also see doing evil as part of a duty to an evil deity or master. Lawful evil is sometimes called diabolical, because devils are the epitome of lawful evil. Lawful evil is the best alignment you can be because it combines honor and dedicated self-interest. However, lawful evil can be a dangerous alignment because it represents methodical, intentional, and frequently successful evil."); break;
			case "ne": write("Neutral Evil&lt;/b> A neutral evil villain does whatever he can get away with. He is out for himself, pure and simple. He sheds no tears for those he kills, whether for profit, sport, or convenience. He has no love of order and holds no illusion that following laws, traditions, or codes would make him any better or more noble. On the other hand, he doesn't have the restless nature or love of conflict that a chaotic evil villain has.  Some neutral evil villains hold up evil as an ideal, committing evil for its own sake. Most often, such villains are devoted to evil deities or secret societies. Neutral evil is the best alignment you can be because you can advance yourself without regard for others. However, neutral evil can be a dangerous alignment because it represents pure evil without honor and without variation."); break;
			case "ce": write("Chaotic Evil&lt;/b> A chaotic evil character does whatever his greed, hatred, and lust for destruction drive him to do. He is hot-tempered, vicious, arbitrarily violent, and unpredictable. If he is simply out for whatever he can get, he is ruthless and brutal. If he is committed to the spread of evil and chaos, he is even worse. Thankfully, his plans are haphazard, and any groups he joins or forms are poorly organized. Typically, chaotic evil people can be made to work together only by force, and their leader lasts only as long as he can thwart attempts to topple or assassinate him. Chaotic evil is sometimes called demonic because demons are the epitome of chaotic evil. Chaotic evil is the best alignment you can be because combines self-interest and pure freedom. However, chaotic evil can be a dangerous alignment because it represents the destruction not only of beauty and life but also of the order on which beauty and life depend."); }

		write("&lt;br>");

		write("<br>&lt;br>&lt;u>Race:&lt;/u>&lt;br>&lt;b>");

		switch (race) {
			case "human": write("Humans&lt;/b> are the most adaptable of the common races. Short generations and a penchant for migration and conquest have made them physically diverse as well. Humans are often unorthodox in their dress, sporting unusual hairstyles, fanciful clothes, tattoos, and the like."); break;
			case "halfling": write("Halflings&lt;/b> are clever, capable and resourceful survivors. They are notoriously curious and show a daring that many larger people can't match. They can be lured by wealth but tend to spend rather than hoard. They prefer practical clothing and would rather wear a comfortable shirt than jewelry. Halflings stand about 3 feet tall and commonly live to see 150."); break;
			case "elf": write("Elves&lt;/b> are known for their poetry, song, and magical arts, but when danger threatens they show great skill with weapons and strategy. Elves can live to be over 700 years old and, by human standards, are slow to make friends and enemies, and even slower to forget them. Elves are slim and stand 4.5 to 5.5 feet tall. They have no facial or body hair, prefer comfortable clothes, and possess unearthly grace. Many others races find them hauntingly beautiful."); break;
			case "halfelf": write("Half-Elves&lt;/b> have the curiosity and ambition for their human parent and the refined senses and love of nature of their elven parent, although they are outsiders among both cultures. To humans, half-elves are paler, fairer and smoother-skinned than their human parents, but their actual skin tones and other details vary just as human features do.  Half-elves tend to have green, elven eyes. They live to about 180."); break;
			case "gnome": write("Gnomes&lt;/b> are in wide demand as alchemists, inventors, and technicians, though most prefer to remain among their own kind in simple comfort. Gnomes adore animals, gems, and jokes, especially pranks. They love to learn by personal experience, and are always trying new ways to build things. Gnomes stand 3 to 3.5 feet tall and live about 350 to 500 years."); break;
			case "halforc": write("Half-Orcs&lt;/b> are the short-tempered and sullen result of human and orc pairings. They would rather act than ponder and would rather fight than argue. They love simple pleasures, such as feasting, boasting, and wild dancing. They are an asset at the right sort of party, but not at the duchess's grand ball. Half-orcs are as tall as humans but their brutish features betray their lineage.  They regard scars as tokens of pride and things of beauty. They rarely reach 75 years of age."); break;
			case "dwarf": write("Dwarves&lt;/b> are known for their skill in warfare, their ability to withstand physical and magical punishment, their hard work, and their capacity for drinking ale. Dwarves are slow to jest and suspicious of strangers, but they are generous to those who earn their trust. They stand just 4 to 4.5 feet tall, but are broad and compactly built, almost as wide as they are tall. Dwarven men value their beards highly."); }

		write("<br>&lt;br>&lt;br>&lt;u>");

		if (secclass !="none") { write("Primary "); }
		write("Class:&lt;/u>&lt;br>&lt;b>");

		switch (primclass) {
			case "fighter": write("Fighters&lt;/b> can be many things, from soldiers to criminal enforcers. Some see adventure as a way to get rich, while others use their skills to protect the innocent. Fighters have the best all-around fighting capabilities of the PC classes, and they are trained to use all standard weapons and armor. A fighter's rigorous martial training grants him many bonus feats as he progresses, and high-level fighters have access to special melee maneuvers and exotic weapons not available to any other character."); break;
			case "ranger": write("Rangers&lt;/b> are skilled stalkers and hunters who make their home in the woods. Their martial skill is nearly the equal of the fighter, but they lack the latter's dedication to the craft of fighting. Instead, the ranger focuses his skills and training on a specific enemy a type of creature he bears a vengeful grudge against and hunts above all others. Rangers often accept the role of protector, aiding those who live in or travel through the woods. His skills allow him to move quietly and stick to the shadows, especially in natural settings, and he also has special knowledge of certain types of creatures. Finally, an experienced ranger has such a tie to nature that he can actually draw on natural power to cast divine spells, much as a druid does, and like a druid he is often accompanied by animal companions. A ranger's Wisdom score should be high, as this determines the maximum spell level that he can cast."); break;
			case "paladin": write("Paladins&lt;/b> take their adventures seriously, and even a mundane mission is, in the heart of the paladin, a personal test an opportunity to demonstrate bravery, to learn tactics, and to find ways to do good. Divine power protects these warriors of virtue, warding off harm, protecting from disease, healing, and guarding against fear. The paladin can also direct this power to help others, healing wounds or curing diseases, and also use it to destroy evil. Experienced paladins can smite evil foes and turn away undead. A paladin's Wisdom score should be high, as this determines the maximum spell level that they can cast. Many of the paladin's special abilities also benefit from a high Charisma score."); break;
			case "cleric": write("Clerics&lt;/b> act as intermediaries between the earthly and the divine (or infernal) worlds. A good cleric helps those in need, while an evil cleric seeks to spread his patron's vision of evil across the world. All clerics can heal wounds and bring people back from the brink of death, and powerful clerics can even raise the dead. Likewise, all clerics have authority over undead creatures, and they can turn away or even destroy these creatures. Clerics are trained in the use of simple weapons, and can use all forms of armor and shields without penalty, since armor does not interfere with the casting of divine spells. In addition to his normal complement of spells, every cleric chooses to focus on two of his deity's domains. These domains grants the cleric special powers, and give him access to spells that he might otherwise never learn. A cleric's Wisdom score should be high, since this determines the maximum spell level that he can cast."); break;
			case "druid": write("Druids&lt;/b> gain power not by ruling nature but by being at one with it. They hate the unnatural, including aberrations or undead, and destroy them where possible. Druids receive divine spells from nature, not the gods, and can gain an array of powers as they gain experience, including the ability to take the shapes of animals. The weapons and armor of a druid are restricted by their traditional oaths, not simply training. A druid's Wisdom score should be high, as this determines the maximum spell level that they can cast."); break;
			case "rogue": write("Rogues&lt;/b> have little in common with each other. While some - maybe even the majority - are stealthy thieves, many serve as scouts, spies, investigators, diplomats, and simple thugs. Rogues are versatile, adaptable, and skilled at getting what others don't want them to get. While not equal to a fighter in combat, a rogue knows how to hit where it hurts, and a sneak attack can dish out a lot of damage. Rogues also seem to have a sixth sense when it comes to avoiding danger. Experienced rogues develop nearly magical powers and skills as they master the arts of stealth, evasion, and sneak attacks. In addition, while not capable of casting spells on their own, a rogue can sometimes 'fake it' well enough to cast spells from scrolls, activate wands, and use just about any other magic item."); break;
			case "wizard": write("Wizards&lt;/b> are arcane spellcasters who depend on intensive study to create their magic. To wizards, magic is not a talent but a difficult, rewarding art. When they are prepared for battle, wizards can use their spells to devastating effect. When caught by surprise, they are vulnerable. The wizard's strength is her spells, everything else is secondary. She learns new spells as she experiments and grows in experience, and she can also learn them from other wizards. In addition, over time a wizard learns to manipulate her spells so they go farther, work better, or are improved in some other way. A wizard can call a familiar- a small, magical, animal companion that serves her. With a high Intelligence, wizards are capable of casting very high levels of spells."); break;
			case "sorcerer": write("Sorcerers&lt;/b> are arcane spellcasters who manipulate magic energy with imagination and talent rather than studious discipline. They have no books, no mentors, no theories just raw power that they direct at will. Sorcerers know fewer spells than wizards do and acquire them more slowly, but they can cast individual spells more often and have no need to prepare their incantations ahead of time. Also unlike wizards, sorcerers cannot specialize in a school of magic. Since sorcerers gain their powers without undergoing the years of rigorous study that wizards go through, they have more time to learn fighting skills and are proficient with simple weapons. Charisma is very important for sorcerers; the higher their value in this ability, the higher the spell level they can cast."); break;
			case "barbarian": write("Barbarians&lt;/b> are brave, even reckless, and their warrior skills make them well suited to adventure. Instead of training and discipline, barbarians have a powerful rage that makes them stronger, tougher, and better able to withstand attacks. They only have the energy for a few such displays per day, but it is usually sufficient. Constant exposure to danger has also given barbarians a sort of 'sixth sense,' the preternatural ability to sense danger and dodge attacks, and their running stamina is legendary."); break;
			case "monk": write("Monks&lt;/b> are versatile warriors skilled at fighting without weapons or armor. Good-aligned monks serve as protectors of the people, while evil monks make ideal spies and assassins. Though they don't cast spells, monks channel a subtle energy, called ki. This energy allows them to perform amazing feats, such as healing themselves, catching arrows in flight, and dodging blows with lightning speed. Their mundane and ki-based abilities grow with experience, granting them more power over themselves and their environment. Monks suffer unique penalties to their abilities if they wear armor, as doing so violates their rigid oath. A monk wearing armor loses their Wisdom and level based armor class bonuses, their movement speed, and their additional unarmed attacks per round."); break;
			case "warlock": write("Warlocks&lt;/b> Warlocks are driven by an insatiable need for knowledge and power, which compels them to enter into a pact with an otherworldly being.  Sometimes the relationship between a warlock and their patron is like that of a cleric and a deity, though the beings that serve as patrons to warlocks are not gods.  A warlock might lead a cult dedicated to a fey prince, an archdevil, or an utterly alien entity - beings not typically served by clerics.  More often, though, the arrangement is similar to that between a master and an apprentice.  The warlock learns and grows in power, at the cost of occasional services performed on the patron's behalf."); break; 
			case "bard": write("Bards&lt;/b> often serve as negotiators, messengers, scouts, and spies. They love to accompany heroes (and villains) to witness heroic (or villainous) deeds firsthand, since a bard who can tell a story from personal experience earns renown among his fellows. A bard casts arcane spells without any advance preparation, much like a sorcerer. Bards also share some specialized skills with rogues, and their knowledge of item lore is nearly unmatched. A high Charisma score allows a bard to cast high-level spells."); }

		if (secclass !="none") { write("<br>&lt;br>&lt;br>&lt;u>Secondary Class:&lt;/u>&lt;br>&lt;b>"); }

		switch (secclass) {
			case "fighter": write("Fighters&lt;/b> can be many things, from soldiers to criminal enforcers. Some see adventure as a way to get rich, while others use their skills to protect the innocent. Fighters have the best all-around fighting capabilities of the PC classes, and they are trained to use all standard weapons and armor. A fighter's rigorous martial training grants him many bonus feats as he progresses, and high-level fighters have access to special melee maneuvers and exotic weapons not available to any other character."); break;
			case "ranger": write("Rangers&lt;/b> are skilled stalkers and hunters who make their home in the woods. Their martial skill is nearly the equal of the fighter, but they lack the latter's dedication to the craft of fighting. Instead, the ranger focuses his skills and training on a specific enemy a type of creature he bears a vengeful grudge against and hunts above all others. Rangers often accept the role of protector, aiding those who live in or travel through the woods. His skills allow him to move quietly and stick to the shadows, especially in natural settings, and he also has special knowledge of certain types of creatures. Finally, an experienced ranger has such a tie to nature that he can actually draw on natural power to cast divine spells, much as a druid does, and like a druid he is often accompanied by animal companions. A ranger's Wisdom score should be high, as this determines the maximum spell level that he can cast."); break;
			case "paladin": write("Paladins&lt;/b> take their adventures seriously, and even a mundane mission is, in the heart of the paladin, a personal test an opportunity to demonstrate bravery, to learn tactics, and to find ways to do good. Divine power protects these warriors of virtue, warding off harm, protecting from disease, healing, and guarding against fear. The paladin can also direct this power to help others, healing wounds or curing diseases, and also use it to destroy evil. Experienced paladins can smite evil foes and turn away undead. A paladin's Wisdom score should be high, as this determines the maximum spell level that they can cast. Many of the paladin's special abilities also benefit from a high Charisma score."); break;
			case "cleric": write("Clerics&lt;/b> act as intermediaries between the earthly and the divine (or infernal) worlds. A good cleric helps those in need, while an evil cleric seeks to spread his patron's vision of evil across the world. All clerics can heal wounds and bring people back from the brink of death, and powerful clerics can even raise the dead. Likewise, all clerics have authority over undead creatures, and they can turn away or even destroy these creatures. Clerics are trained in the use of simple weapons, and can use all forms of armor and shields without penalty, since armor does not interfere with the casting of divine spells. In addition to his normal complement of spells, every cleric chooses to focus on two of his deity's domains. These domains grants the cleric special powers, and give him access to spells that he might otherwise never learn. A cleric's Wisdom score should be high, since this determines the maximum spell level that he can cast."); break;
			case "druid": write("Druids&lt;/b> gain power not by ruling nature but by being at one with it. They hate the unnatural, including aberrations or undead, and destroy them where possible. Druids receive divine spells from nature, not the gods, and can gain an array of powers as they gain experience, including the ability to take the shapes of animals. The weapons and armor of a druid are restricted by their traditional oaths, not simply training. A druid's Wisdom score should be high, as this determines the maximum spell level that they can cast."); break;
			case "rogue": write("Rogues&lt;/b> have little in common with each other. While some - maybe even the majority - are stealthy thieves, many serve as scouts, spies, investigators, diplomats, and simple thugs. Rogues are versatile, adaptable, and skilled at getting what others don't want them to get. While not equal to a fighter in combat, a rogue knows how to hit where it hurts, and a sneak attack can dish out a lot of damage. Rogues also seem to have a sixth sense when it comes to avoiding danger. Experienced rogues develop nearly magical powers and skills as they master the arts of stealth, evasion, and sneak attacks. In addition, while not capable of casting spells on their own, a rogue can sometimes 'fake it' well enough to cast spells from scrolls, activate wands, and use just about any other magic item."); break;
			case "wizard": write("Wizards&lt;/b> are arcane spellcasters who depend on intensive study to create their magic. To wizards, magic is not a talent but a difficult, rewarding art. When they are prepared for battle, wizards can use their spells to devastating effect. When caught by surprise, they are vulnerable. The wizard's strength is her spells, everything else is secondary. She learns new spells as she experiments and grows in experience, and she can also learn them from other wizards. In addition, over time a wizard learns to manipulate her spells so they go farther, work better, or are improved in some other way. A wizard can call a familiar- a small, magical, animal companion that serves her. With a high Intelligence, wizards are capable of casting very high levels of spells."); break;
			case "sorcerer": write("Sorcerers&lt;/b> are arcane spellcasters who manipulate magic energy with imagination and talent rather than studious discipline. They have no books, no mentors, no theories just raw power that they direct at will. Sorcerers know fewer spells than wizards do and acquire them more slowly, but they can cast individual spells more often and have no need to prepare their incantations ahead of time. Also unlike wizards, sorcerers cannot specialize in a school of magic. Since sorcerers gain their powers without undergoing the years of rigorous study that wizards go through, they have more time to learn fighting skills and are proficient with simple weapons. Charisma is very important for sorcerers; the higher their value in this ability, the higher the spell level they can cast."); break;
			case "barbarian": write("Barbarians&lt;/b> are brave, even reckless, and their warrior skills make them well suited to adventure. Instead of training and discipline, barbarians have a powerful rage that makes them stronger, tougher, and better able to withstand attacks. They only have the energy for a few such displays per day, but it is usually sufficient. Constant exposure to danger has also given barbarians a sort of 'sixth sense,' the preternatural ability to sense danger and dodge attacks, and their running stamina is legendary."); break;
			case "monk": write("Monks&lt;/b> are versatile warriors skilled at fighting without weapons or armor. Good-aligned monks serve as protectors of the people, while evil monks make ideal spies and assassins. Though they don't cast spells, monks channel a subtle energy, called ki. This energy allows them to perform amazing feats, such as healing themselves, catching arrows in flight, and dodging blows with lightning speed. Their mundane and ki-based abilities grow with experience, granting them more power over themselves and their environment. Monks suffer unique penalties to their abilities if they wear armor, as doing so violates their rigid oath. A monk wearing armor loses their Wisdom and level based armor class bonuses, their movement speed, and their additional unarmed attacks per round."); break;
			case "warlock": write("Warlocks&lt;/b> Warlocks are driven by an insatiable need for knowledge and power, which compels them to enter into a pact with an otherworldly being.  Sometimes the relationship between a warlock and their patron is like that of a cleric and a deity, though the beings that serve as patrons to warlocks are not gods.  A warlock might lead a cult dedicated to a fey prince, an archdevil, or an utterly alien entity - beings not typically served by clerics.  More often, though, the arrangement is similar to that between a master and an apprentice.  The warlock learns and grows in power, at the cost of occasional services performed on the patron's behalf."); break;
			case "bard": write("Bards&lt;/b> often serve as negotiators, messengers, scouts, and spies. They love to accompany heroes (and villains) to witness heroic (or villainous) deeds firsthand, since a bard who can tell a story from personal experience earns renown among his fellows. A bard casts arcane spells without any advance preparation, much like a sorcerer. Bards also share some specialized skills with rogues, and their knowledge of item lore is nearly unmatched. A high Charisma score allows a bard to cast high-level spells."); }

		if (deitychk==1) {

		write("<br>&lt;br>&lt;br>&lt;u>Deity:&lt;/u>&lt;br>&lt;b>");

		switch (deity) {
			case "tyr": write("Tyr&lt;/b> is the Lawful Good god of justice.  He is also known as Tyr Grimjaws, Wounded Tyr, the Maimed God, and Blind Tyr.  He appears as a warrior, missing his hand.  Followers of Tyr are concerned first and foremost with justice - discovering the truth and punishing the guilty for their crimes.  They wear blue and purple robes with a white sash, a white gauntlet on the left hand, and a black gauntlet on the right, to symbolize Tyr's lost hand.  Their preferred weapon is the warhammer.  Tyr's symbol is a set of scales resting on a warhammer."); break;
			case "arvoreen": write("Arvoreen&lt;/b> is the Lawful Good halfling god of war, defense, and vigilance.  He is also known as the Defender and the Vigilant Guardian.  Followers of Arvoreen are devoted to the defense of the halfling race, and spend their days drilling and preparing other halflings for the defense of their homes, if necessary.  Their preferred weapon is the short sword.  Arvoreen's symbol is a pair of crossed short swords."); break;
			case "moradin": write("Moradin&lt;\/b> is the Lawful Good dwarven god of stone, rock, fire, and metal.  He is also known as the Creator God, because he is the creator of the dwarven race.  Followers of Moradin believe that a person's worth is determined by the things they do.  They also are trained to work in the forge, creating weapons in the name and spirit of Moradin.  They can use any weapon, but it must be one that they have created themselves.  Moradin's symbol is a hammer and an anvil."); break;
			case "lathander": write("Lathander&lt;/b> is the Neutral Good god of spring, dawn, birth, and renewal.  His followers believe in new beginnings, and work for the betterment of all.  They have no preferred weapon, but they typically wear plate mail and a shield, with red and yellow tinting.  Lathander's symbol is rosy pink disk, typically cut from rose quartz."); break;
			case "mystra": write("Mystra&lt;/b> is the Neutral Good goddess of magic.  She is also known as the Lady of Mysteries.  Followers of Mystra wear armor and carry shields with her symbol on them.  Mystra's symbol is a ring of stars."); break;
			case "oghma": write("Oghma&lt;/b> is the Neutral Good god of knowledge and invention.  He is also known as the Binder of What is Known, and is the Patron of Bards.  His followers believe that knowledge reigns supreme, and is the basis for everything else that is done.  They wear white shirts and pants, with a black and gold braided vest, and a small, box-like hat.  All priests of Oghma are known as Loremasters.  Oghma's symbol is a scroll."); break;
			case "mielikki": write("Mielikki&lt;/b> is the Neutral Good goddess of the forest and autumn.  She is also known as the Lady of the Forest, and is the Patron of Rangers.  Her followers are devoted to nature, and believe in the positive and outreaching elements of it.  They use light armor, and a variety of weapons suitable for hunting, which they are quite skilled at.  Mielikki's symbol is a unicorn head."); break;
			case "marthammor_duin": write("Marthammor Duin&lt;/b> is the Neutral Good dwarven god of protection and travel.  He is also known as the Finder of Trails, the Watcher over Wanderers, the Watchful Eye, and the Wanderer.  His followers are also wanderers, and are open to new ideas far more than most dwarves.  They are typically guides or scouts.  Their preferred weapon is the heavy mace.  Marthammor Duin's symbol is an upright mace in front of a fur-trimmed leather boot."); break;
			case "tymora": write("Tymora&lt;/b> is the Chaotic Good goddess of luck and good fortune.  She is also known as Lady Luck, and also Tyche's fair-tressed daughter.  Followers of Tymora believe in the tenent that, 'Fortune Favors the Bold,' and will throw caution to the wind and trust to luck to work things out for the best.  Tymora's symbol is an unmarked silver disk."); break;
			case "finder_wyvernspur": write("Finder Wyvernspur&lt;/b> is the Chaotic Neutral god of the cycle of life and the transformation of art, although he leans heavily towards Good.  He is also known as the Nameless Bard.  Followers of Finder believe that everything must change in order to grow and thrive.  Their preferred weapon is the bastard sword."); break;
			case "shaundakul": write("Shaundakul&lt;/b> is the Chaotic Good god of travel and exploration.  He is also known as the Rider of the Winds.  His followers are typically rangers, and work to protect the land.  They typically wear leather armor, and carry long swords and short bows.  Shaundakul's symbol is a white hand with the index finger raised."); break;
			case "hanali_celanil": write("Hanali Celanil&lt;/b> is the Chaotic Good elven goddess of love, beauty, and art.  She is also known as the Heart of Gold and Lady Goldheart.  Her followers delight in creation and youth, and work to spread happiness, love, and beauty.  Their preferred weapon is the dagger."); break;
			case "solonor_thelandira": write("Solonor Thelandira&lt;/b> is the Chaotic Good elven god of archery and the hunt.  He is also known as the Keen Eye, the Great Archer, and the Forest Hunter.  His followers respect nature, and only hunt when needed, but are quick to defend the forest from intruders.  Their favorite weapon is the bow, and they tend to be extremely talented with it.  Solonor Thelandira's symbol is an arrow with green fletchings."); break;
			case "rillifane_rallathil": write("Rillifane Rallathil&lt;/b> is the Chaotic Good elven god of woodlands and nature.  He is also known as the Leaflord, the Wild One, and the Great Oak.  He is appears as a huge oak tree.  His followers believe that everyone should be free to spend their lives doing what nature has meant them to, and they protect the forests from those who would abuse them.  Their preferred weapon is the quarterstaff.  Rillifane Rallathil's symbol is an oak tree."); break;
			case "helm": write("Helm&lt;/b> is the Lawful Neutral god of guardians and protectors.  His followers believe in vigilance and preparedness, and are always ready for whatever confronts them.  They wear plate mail, sometimes with gold embossing, with an open eye set into the breastplate, and an open-faced helmet.  Helm's symbol is an open eye in a gauntlet."); break;
			case "azuth": write("Azuth&lt;/b> is the Lawful Neutral god of wizards and mages.  He is also known as the High One, and is the Patron of Wizards.  His followers believe that a systematic approach to magic is the best, and they strive for calm and caution in order to avoid accidents.  They wear shimmering robes, and are well-versed in magic, as well as typical priest spells.  Azuth's symbol is a hand with a raised, glowing index finger."); break;
			case "urogalan": write("Urogalan&lt;/b> is the Lawful Neutral halfling god of death and earth.  He is also known as He Who Must Be and the Lord in the Earth.  His followers guard the dead and protect halflings from those that don't stay buried.  Their preferred weapon is the flail.  Urogalan's symbol is a silhouette of a dog's head."); break;
			case "gond": write("Gond&lt;/b> is the True Neutral god of artifice, craft, and construction.  He is also known as Gond Wonderbringer.  His followers believe that 'actions count' - that is, that what is accomplished in the end is what is truly important.  They wear saffron clothing, with red sashes containing all manner of mechanical devices.  Their preferred weapons are firearms, since the followers of Gond had a large hand in their making and invention.  They also wear plate mail (no shield), but generally prefer to have bodyguards, instead.  Gond's symbol is a toothed wheel, made of ivory, bone, or metal."); break;
			case "silvanus": write("Silvanus&lt;/b> is the True Neutral god of nature.  He is also known as the Patron of Druids.  His followers believe in the perfect balance of nature, and believe that nature's bounty is preferable to any other 'civilizing' method.  They wear leather or metallic scale mail, constructed of leaf-shaped scales.  Silvanus's symbol is an oak leaf."); break;
			case "sheela_peryroyl": write("Sheela Peryroyl&lt;/b> is the True Neutral halfling goddess of nature, agriculture, beauty, and romantic love.  She is also known as the Green Sister and the Watchful Mother.  She appears as a halfling dressed in wildflowers.  Her followers work to preserve nature's beauty and also cultivate wilderness areas for halflings to settle.  They also have feasts and parties, where romance and revelry are encouraged.  Their preferred weapon is the sickle.  They typically wear a small flower in their hair.  Sleeha Peryroyl's symbol is the daisy."); break;
			case "brandobaris": write("Brandobaris&lt;/b> is the True Neutral halfling god of stealth, adventuring, and thievery.  He is also known as the Master of Stealth, the Trickster, and the Irrepressible Scamp.  His followers are always on the lookout for an adventure, and try to make a profit, but avoid greed.  Their preferred weapon is the dagger.  Brandobaris's symbol is an open, round door."); break;
			case "dumathoin": write("Dumathoin&lt;/b> is the True Neutral dwarven god of buried wealth, ores, gems, and mining.  He is also known as the Keeper of Secrets under the Mountain.  His followers are typically miners and explorers, but also respect the beauty of the earth.  They also stand guard over the dwarven dead.  Their preferred weapon is the maul.  Dumathoin's symbol is a faceted gem set inside a mountain peak."); break;
			case "beshaba": write("Beshaba&lt;/b> is the Chaotic Evil goddess of bad luck, accidents, and mischief.  She is also known as the Maid of Misfortune, and also Tyche's unpleasant daughter.  Followers of Beshaba believe that bad things happen to everyone, and only by praying to Beshaba will you have a chance of being spared.  Her symbol is a set of black deer's antlers inset on a red triangle."); break;
			case "tempus": write("Tempus&lt;/b> is the Chaotic Neutral god of war.  He is also known as the Lord of Battle and the Foehammer.  His followers believe in the glory and joy of battle, and are never far from it.  They typically wear battered armor, and carry a variety of weapons, but do not use missile weapons.  Tempus's symbol is a flaming sword."); break;
			case "fenmarel_mestarine": write("Fenmarel Mestarine&lt;/b> is the Chaotic Neutral elven god of outcasts and isolation.  He is also known as the Lone Wolf.  His followers are outcasts (either by force or by choice) from elven society, and believe in being self-sufficient.  Their preferred weapon is the dagger.  Fenmarel Mestarine's symbol is a pair of elven eyes in the darkness."); break;
			case "erevan_ilesere": write("Erevan Ilesere&lt;/b> is the Chaotic Neutral elven god of mischief and rogues.  He is also known as the Trickster and the Chameleon.  His followers are always looking for fun and adventure, and are notorious pranksters.  Their favorite weapon is the short sword.  Erevan Ilesere's symbol is a nova star with asymmetric rays."); break;
			case "iyachtu_xvim": write("Iyachtu Xvim&lt;/b> is the Lawful Evil god of fear, hatred, malice, and tyranny.  He is also known as the Godson and the Son of Bane.  He appears as a gaunt, naked, scimitar-wielding man, or as a black cloud with glowing green eyes.  His followers are working to strengthen his position in the world by converting (often by force) other deities' worshippers.  They wear black robes with dark green trim, and wear black iron gauntlets with green eyes on the backs.  Iyachtu Xvim's symbol is a black hand, inset with green eyes."); break;
			case "cyric": write("Cyric&lt;/b> is the Neutral Evil god of death, murder, the dead, strife, tyranny, deception, and illusion.  His followers are working to secure his position as a new god, and are in conflict with many worshippers of other deities.  They wear black or dark purple robes, with silver trimming, and wear silver bracelets.  Cyric's symbol is a skull set in a purple starburst."); break;
			case "mask": write("Mask&lt;/b> is the Neutral Evil god of rogues, thieves.  He is also known as the Lord of Shadows.  He appears as a lithe man, shadowed, wearing dark clothing.  His followers believe in stealth and wariness.  They wear black and gray clothing, and carry weapons and armor similar to that of a thief.  They frequently wear masks to conceal their identity.  Mask's symbol is a dark, checkered mask."); break;
			case "abbathor": write("Abbathor&lt;/b> is the Neutral Evil dwarven god of greed.  He is also known as the Great Master of Greed, the Trove Lord, and the Avaricious.  His followers believe in the gaining of riches and wealth by any means necessary.  Their preferred weapon is the dagger.  Abbathor's symbol is a jeweled dagger."); break;
			case "velsharoon": write("Velsharoon&lt;/b> is the Neutral Evil god of necromancy, liches, and undeath.  He is also known as the Vaunted, the Archmage of Necromancy, and the Lord of the Forgotten Crypt.  His followers practice the necromantic arts, and raise the dead to do their bidding.  His symbol is a crowned skull."); break;
			case "talos": write("Talos&lt;/b> is the Chaotic Evil god of storms, forest fires, earthquakes, tornadoes, and destruction in general.  He is also known as the Destroyer.  His followers fear him more than worship him, and they revel in the destructive fury of nature - while praying to be spared from its wrath.  Talos's symbol is three lightning bolts, of different colors, coming from a central point."); break;
			case "garl_glittergold": write("Garl Glittergold&lt;/b> is the Lawful Good gnomish god of mischief, cleverness, battle, and gemstones.  He is also known as the Joker, the Watchful Protector, the Priceless Gem, the Sparkling Wit, and the God of Gnomes, as he is the head of their pantheon.  His followers enjoy a good laugh and a good prank, perhaps even more so than a normal gnome, but also work to make the world a better place.  They are extremely fond of gems.  Their preferreed weapon is the battleaxe."); break;
			case "gaerdal_ironhand": write("Gaerdal Ironhand&lt;/b> is the Lawful Good gnomish god of vigilance and combat.  He is also known as the Stern and the Shield of the Golden Hills.  His followers work to defend the homes of the gnomish race, and practice the arts of war and train others to do the same.  They are somewhat isolated from the generally fun-loving gnomes, because they take their duties very seriously.  Their preferred weapon is the warhammer."); break;
			case "baervan_wildwanderer": write("Baervan Wildwanderer&lt;/b> is the Neutral Good gnomish god of forests, travel, and nature.  He is also known as the Masked Leaf.  His avatar is always accompanied by an intelligent, giant raccoon, named Chiktikka Fastpaws.  His followers, like him, enjoy the outdoors and work to protect it and guard those who also enjoy it.  Their preferred weapon is the halfspear."); break;
			case "flandal_steelskin": write("Flandal Steelskin&lt;/b> is the Neutral Good gnomish god of mining, physical fitness, metalworking, and smithing.  He is also known as the Master of Metal, the Lord of Smiths,  and the Great Steelsmith.  His worshippers are frequently miners or smiths, and believe in the value of metalworking, and also in the value of physical strength.  Their preferred weapon is the warhammer."); break;
			case "callarduran_smoothhands": write("Callarduran Smoothhands&lt;/b> is the True Neutral gnomish god of stone, the underground, and mining.  He is also known as the Deep Brother and the Master of Stone.  His followers enjoy mining - especially for rubies.  Their favorite weapon is the battleaxe."); break;
			case "urdlen": write("Urdlen&lt;/b> is the Chaotic Evil gnomish god of greed, bloodlust, and hatred.  It is also known as the Crawler Below.  Urdlen is generally represented as a huge, furless mole with sharp claws.  His followers have changed their love of pranks and jokes to a love of malicious schemes and general evildoing.  Their favored weapon is the claw bracer."); }
		}

		write("<br>&lt;br>&lt;br>");

		write("Find out &lt;a href='http://www.easydamus.com/character.html' target='mt'>What Kind of Dungeons and Dragons Character Would You Be?&lt;/a>, courtesy of ");
                write("Easydamus &lt;a href='mailto:zybstrski@excite.com'>(e-mail)&lt;/a>&lt;br>&lt;br><br>");

		write("\<\/samp>\<\/td>\<\/tr>\<\/table>");

		}

		if (survey.detailed.checked) {

		write("<br><hr><br>\<\/center>");

		write("<b>Detailed Results:\<\/b><br><br>");



			write("<u>Alignment:\<\/u><br><samp>");

			write("Lawful Good ----- ");
			for (i = 0; i < lg; i++) write("X");
			write(" (",lg,")<br>");

			write("Neutral Good ---- ");
			for (i = 0; i < ng; i++) write("X");
			write(" (",ng,")<br>");

			write("Chaotic Good ---- ");
			for (i = 0; i < cg; i++) write("X");
			write(" (",cg,")<br>");

			write("Lawful Neutral -- ");
			for (i = 0; i < ln; i++) write("X");
			write(" (",ln,")<br>");

			write("True Neutral ---- ");
			for (i = 0; i < nn; i++) write("X");
			write(" (",nn,")<br>");

			write("Chaotic Neutral - ");
			for (i = 0; i < cn; i++) write("X");
			write(" (",cn,")<br>");

			write("Lawful Evil ----- ");
			for (i = 0; i < le; i++) write("X");
			write(" (",le,")<br>");

			write("Neutral Evil ---- ");
			for (i = 0; i < ne; i++) write("X");
			write(" (",ne,")<br>");

			write("Chaotic Evil ---- ");
			for (i = 0; i < ce; i++) write("X");
			write(" (",ce,")<br>");

			write("\<\/samp><br><u>Law &amp; Chaos:\<\/u><br><samp>");

			write("Law ----- ");
			for (i = 0; i < lx; i++) write("X");
			write(" (",lx,")<br>");

			write("Neutral - ");
			for (i = 0; i < nx; i++) write("X");
			write(" (",nx,")<br>");

			write("Chaos --- ");
			for (i = 0; i < cx; i++) write("X");
			write(" (",cx,")<br>");

			write("\<\/samp><br><u>Good &amp; Evil:\<\/u><br><samp>");

			write("Good ---- ");
			for (i = 0; i < xg; i++) write("X");
			write(" (",xg,")<br>");

			write("Neutral - ");
			for (i = 0; i < xn; i++) write("X");
			write(" (",xn,")<br>");

			write("Evil ---- ");
			for (i = 0; i < xe; i++) write("X");
			write(" (",xe,")<br>");


		write("\<\/samp><br><u>Race:\<\/u><br><samp>");

		write("Human ---- ");
		for (i = 0; i < human; i++) write("X");
		write(" (",human,")<br>");

		write("Dwarf ---- ");
		for (i = 0; i < dwarf; i++) write("X");
		write(" (",dwarf,")<br>");

		write("Elf ------ ");
		for (i = 0; i < elf; i++) write("X");
		write(" (",elf,")<br>");

		write("Gnome ---- ");
		for (i = 0; i < gnome; i++) write("X");
		write(" (",gnome,")<br>");

		write("Halfling - ");
		for (i = 0; i < halfling; i++) write("X");
		write(" (",halfling,")<br>");

		write("Half-Elf - ");
		for (i = 0; i < halfelf; i++) write("X");
		write(" (",halfelf,")<br>");

		write("Half-Orc - ");
		for (i = 0; i < halforc; i++) write("X");
		write(" (",halforc,")<br>");

		write("\<\/samp><br><u>Class:\<\/u><br><samp>");

		write("Barbarian - ");
		for (i = 0; i < barbarian; i++) write("X");
		write(" (",barbarian,")<br>");

		write("Bard ------ ");
		for (i = 0; i < bard; i++) write("X");
		write(" (",bard,")<br>");

		write("Cleric ---- ");
		for (i = 0; i < cleric; i++) write("X");
		write(" (",cleric,")<br>");

		write("Druid ----- ");
		for (i = 0; i < druid; i++) write("X");
		write(" (",druid,")<br>");

		write("Fighter --- ");
		for (i = 0; i < fighter; i++) write("X");
		write(" (",fighter,")<br>");

		write("Monk ------ ");
		for (i = 0; i < monk; i++) write("X");
		write(" (",monk,")<br>");

		write("Paladin --- ");
		for (i = 0; i < paladin; i++) write("X");
		write(" (",paladin,")<br>");

		write("Ranger ---- ");
		for (i = 0; i < ranger; i++) write("X");
		write(" (",ranger,")<br>");

		write("Rogue ----- ");
		for (i = 0; i < rogue; i++) write("X");
		write(" (",rogue,")<br>");

		write("Sorcerer -- ");
		for (i = 0; i < sorcerer; i++) write("X");
		write(" (",sorcerer,")<br>");

		write("Warlock --- ");
		for (i = 0; i < warlock; i++) write("X");
		write(" (",warlock,")<br>");

		write("Wizard ---- ");
		for (i = 0; i < wizard; i++) write("X");
		write(" (",wizard,")<br>");

		write("\<\/samp>");

		}

		write("<br><hr><br><center>");

 write("<!--");
 write("<form action=http://us.1.p9.webhosting.yahoo.com/gb/sign method=post>");
 write("<input type=hidden name=\".state\" value=1>");
 write("<input type=hidden name=\"member\" value=\"easydamus\">");
 write("<b>Your Character's Name:  </b>");
 write("<input type=text name=1 value=\"\"");
 write("<br><br><br>");

 write("<input type=hidden name=2 value=\"");

		switch (align) {
			case "lg": write("Lawful Good "); break;
			case "ng": write("Neutral Good "); break;
			case "cg": write("Chaotic Good "); break;
			case "ln": write("Lawful Neutral "); break;
			case "nn": write("True Neutral "); break;
			case "cn": write("Chaotic Neutral "); break;
			case "le": write("Lawful Evil "); break;
			case "ne": write("Neutral Evil "); break;
			case "ce": write("Chaotic Evil "); }

 write("\">");
 write("<input type=hidden name=3 value=\"");


		switch (race) {
			case "human": write("Human "); break;
			case "halfling": write("Halfling "); break;
			case "elf": write("Elf "); break;
			case "halfelf": write("Half-Elf "); break;
			case "gnome": write("Gnome "); break;
			case "halforc": write("Half-Orc "); break;
			case "dwarf": write("Dwarf "); }

 write("\">");
 write("<input type=hidden name=4 value=\"");

		switch (primclass) {
			case "fighter": write("Fighter"); break;
			case "ranger": write("Ranger"); break;
			case "paladin": write("Paladin"); break;
			case "mage": write("Mage"); break;
			case "cleric": write("Cleric"); break;
			case "druid": write("Druid"); break;
			case "thief": write("Thief"); break;
			case "sorcerer": write("Sorcerer"); break;
			case "rogue": write("Rogue"); break;
			case "barbarian": write("Barbarian"); break;
			case "wizard": write("Wizard"); break;
			case "monk": write("Monk"); break;
			case "warlock": write("Warlock"); break;
			case "bard": write("Bard"); }

		switch (secclass) {
			case "fighter": write("/Fighter"); break;
			case "ranger": write("/Ranger"); break;
			case "paladin": write("/Paladin"); break;
			case "mage": write("/Mage"); break;
			case "cleric": write("/Cleric"); break;
			case "druid": write("/Druid"); break;
			case "thief": write("/Thief"); break;
			case "sorcerer": write("/Sorcerer "); break;
			case "rogue": write("/Rogue "); break;
			case "barbarian": write("/Barbarian "); break;
			case "wizard": write("/Wizard "); break;
			case "monk": write("/Monk"); break;
			case "warlock": write("/Warlock"); break;
			case "bard": write("/Bard"); }

if (secclass == "none") {
                if (level == 1){write(" (1st Level)");}
                if (level == 2){write(" (2nd Level)");}
                if (level == 3){write(" (3rd Level)");}
                if (level > 3){write(" (");}
                if (level > 3){write(level);}
                if (level > 3){write("th Level)");}
                        }

if (secclass !== "none") {
                if (level == 1){write(" (1st/1st Level)");}
                if (level == 2){write(" (1st/1st Level)");}
                if (level == 3){write(" (2nd/1st Level)");}
                if (level == 4){write(" (2nd/2nd Level)");}
                if (level == 5){write(" (3rd/2nd Level)");}
                if (level == 6){write(" (3rd/3rd Level)");}
                if (level == 7){write(" (4th/3rd Level)");}
                if (level == 8){write(" (4th/4th Level)");}
                if (level == 9){write(" (5th/4th Level)");}
                if (level == 10){write(" (5th/5th Level)");}
                         }

 write("\">");
 write("<input type=hidden name=5 value=\"");

		if (deitychk==1) {

			switch (deity) {
				case "tyr": write("Tyr"); break;
				case "arvoreen": write("Arvoreen"); break;
				case "moradin": write("Moradin"); break;
				case "lathander": write("Lathander"); break;
				case "mystra": write("Mystra"); break;
				case "oghma": write("Oghma"); break;
				case "mielikki": write("Mielikki"); break;
				case "marthammor_duin": write("Marthammor Duin"); break;
				case "tymora": write("Tymora"); break;
				case "finder_wyvernspur": write("Finder Wyvernspur"); break;
				case "shaundakul": write("Shaundakul"); break;
				case "hanali_celanil": write("Hanali Celanil"); break;
				case "solonor_thelandira": write("Solonor Thelandira"); break;
				case "rillifane_rallathil": write("Rillifane Rallathil"); break;
				case "helm": write("Helm"); break;
				case "azuth": write("Azuth"); break;
				case "urogalan": write("Urogalan"); break;
				case "gond": write("Gond"); break;
				case "silvanus": write("Silvanus"); break;
				case "sheela_peryroyl": write("Sheela Peryroyl"); break;
				case "brandobaris": write("Brandobaris"); break;
				case "dumathoin": write("Dumathoin"); break;
				case "beshaba": write("Beshaba"); break;
				case "tempus": write("Tempus"); break;
				case "fenmarel_mestarine": write("Fenmarel Mestarine"); break;
				case "erevan_ilesere": write("Erevan Ilesere"); break;
				case "iyachtu_xvim": write("Iyachtu Xvim"); break;
				case "cyric": write("Cyric"); break;
				case "mask": write("Mask"); break;
				case "abbathor": write("Abbathor"); break;
				case "velsharoon": write("Velsharoon"); break;
				case "talos": write("Talos"); break;
				case "garl_glittergold": write("Garl Glittergold"); break;
				case "gaerdal_ironhand": write("Gaerdal Ironhand"); break;
				case "baervan_wildwanderer": write("Baervan Wildwanderer"); break;
				case "flandal_steelskin": write("Flandal Steelskin"); break;
				case "callarduran_smoothhands": write("Calladuran Smoothhands"); break;
				case "urdlen": write("Urdlen");
			}
               }

 write("\">");
 write("<b>Your Character's Patron:  </b>");
 write("<input type=text name=5 value=\"\"");
 write("<br>");
 write("<input type=hidden name=6 value=\"STR ");
 write(strength);
 write(", DEX ");
 write(dexterity);
 write(", CON ");
 write(constitution);
 write(", INT ");
 write(intelligence);
 write(", WIS ");
 write(wisdom);
 write(", CHA ");
 write(charisma);
 write("\">");
 write("<br><br>");
 write("<b>Comments: </b><br>");
 write("<textarea cols=\"40\" rows=\"10\" name=7 value=\"\">");
 write("</textarea>");
 write("<input type=hidden name=8 value=\"");
 write(align);
 write(",");
 write(race);
 write(",");
 write(primclass);
 write(",");
 write(secclass);
 write(",");
 write(level);
 write(",");
 write(deity);
 write(",");
 write(strength);
 write(",");
 write(dexterity);
 write(",");
 write(constitution);
 write(",");
 write(intelligence);
 write(",");
 write(wisdom);
 write(",");
 write(charisma);
 write(",");

 write(lx);
 write(",");
 write(nx);
 write(",");
 write(cx);
 write(",");
 write(xg);
 write(",");
 write(xn);
 write(",");
 write(xe);
 write(",");

 write(human);
 write(",");
 write(dwarf);
 write(",");
 write(elf);
 write(",");
 write(gnome);
 write(",");
 write(halfelf);
 write(",");
 write(halforc);
 write(",");
 write(halfling);
 write(",");

 write(barbarian);
 write(",");
 write(bard);
 write(",");
 write(cleric);
 write(",");
 write(druid);
 write(",");
 write(fighter);
 write(",");
 write(monk);
 write(",");
 write(paladin);
 write(",");
 write(ranger);
 write(",");
 write(rogue);
 write(",");
 write(sorcerer);
 write(",");
 write(warlock);
 write(",");
 write(wizard);
 write("\">");

 write("<br><br>");
 write("<input type=hidden name=\".referer\"value=\"http://www.easydamus.com/character.html\" >");
 write("<input type=submit value=\"Enter Results into the Hall of Heroes!\">");
 write("<br><br>");
 write("</form>");
 write("-->");

 write("<!--");
 write("<a href=\"http://us.1.p9.webhosting.yahoo.com/gb/view?member=easydamus\">View Waiting Room for Hall of Heroes</a>");
 write("<br><br>");
 write("<a href=\"http://www.easydamus.com/hallofheroes.html\">View Hall of Heroes</a>");
 write("<br><br>");
 write("-->");

		write("Neppyman said, 'Like this survey?  Copy, paste, and edit the code to make your own!  Please give me credit if you do so, of course,' so I'm giving him his due.  ^_^<br><br>");
 
                write("Questions?  Comments?  Suggestions? <a href='mailto:zybstrski@excite.com'>E-mail Me!\<\/a><br><br>");
		write("<a href='javascript: self.close()'>(close this window)\<\/a>");
		write("\<\/body>\<\/html>");
            close();
      }
   }


</script>

</head>
<body>
<div class="alignsidebar">
<hr />
<a href="character.html">"What D&D Character Am I?"</a>

<hr />
<a href="characterfaq.html">Survey FAQ</a>
<br />
<hr />
<a href="hallofheroesstats.html">Survey Stats</a>
<br />
<hr />
<a href="alignment.html">D&D Alignment System</a>
<br />
<hr />
<a href="CustomCharacters.html">D&D House Rules</a>
<br />
<hr />
<a href="CustomCharacters.html#BasicD20">Basic d20</a>
<br />
<hr />
<a href="http://slerotin.blogspot.com/">The Passage of Slerotin</a>
<br />
<hr />
<a href='mailto:zybstrski@excite.com'>Contact Me</a>
<hr />
</div>


<div class="alignprose">
<div id="toppage">
<center>
<h1 id="maintitle" title="Page Title">What Kind of D&amp;D Character Would You Be?</h1>
<h3 id="surveyversion" title="Survey Version">(version 5.2EZ based on NEPPYMAN'S version 4.10)</h3>
</center>
<p></p>

<div id="directions" title="Directions">
<p>This survey will determine your ability scores, fantasy race, class, alignment, and character level describing what you would be if you were transformed into a Dungeons and Dragons character. This is a long survey, so set aside about 15 to 20 minutes to complete all 140 questions.  Each question should be answered as accurately as possible by choosing the answer that either describes you the best or the answer with which you agree the most.  The answers have been placed in random order, so read carefully. You must answer every question to get the best possible result.  Given the range of ability scores and the number of race, class, alignment, and character level combinations, this survey can produce over 1.5 TRILLION different results.</p>
<p>
Once you have finished answering all of the questions, submit your responses using the button at the bottom of this page.  The results page will display all of your basic character information and the details of your alignment, race, and class.  Also, HTML code that can be used to display the results on your own site and a detailed breakdown of your scores in various categories will be shown if you leave the option boxes checked.  
<!--
You will also have an option to post your results to the Hall of Heroes.  Please finish the process by posting your results so that I can keep track of how this survey is performing.  You'll have to type in a "fantasy name" to go with your character's stats, so think about your name while you complete the survey below.
-->
</p>
<p>
I am happy to announce that the <b><font color = "red">WARLOCK</font></b> has been added as a possible class result to the survey!
</p>
<p><b>PLEASE NOTE:</b> This test requires support for both JavaScript and pop-up windows.  If your browser doesn't support both of them, you're out of luck.  If you are not sure if your browser will work, scroll to the bottom and click on the "What D&D Character Am I?" button to test before filling out all of the questions.</p>
<p>
<!--
The Hall of Heroes is now closed to new heroes.  There is no longer an option on the results page to post your hero.  The Waiting Room only has room for fifty heroes, and with the traffic this site now experiences, updating the Hall of Heroes has become an enormous task.  I'd like to thank all of you that posted your results to the Hall of Heroes.  
Information from over one thousand heroes has been entered into a database.  
-->
If you would like to view some statistics please visit the <a href="http://www.easydamus.com/hallofheroesstats.html">Hall of Heroes - Statistics</a> page.
</p>
<p>
Millions of people have visited the site.  The <b><a href="http://www.easydamus.com/characterfaq.html">Frequently Asked Questions</a></b> page addresses many of the questions and comments I've received.
</p>
<!--
<p>
I'd like to thank <b>Emmy</b> for her critique of the survey as it got me thinking about the original that I used as inspiration.  A link to NEPPYMAN'S original survey is here:
</p>
<p>
<center><b><a href="http://neppyman.sytes.net/dndwho/">NEPPYMAN'S Original Survey (Version 4.10)</a></b></center>
</p>
-->
<p>
<!--
Also, please visit my site on <a href="http://easydamus.com/alignment.html"> The Alignment System</a> where I've compiled alignment information from the first three editions of Dungeons and Dragons, Dragon magazine articles, and other games.
</p>
<p> A big thanks to <b>Jacob Z.</b> who requested that I alter the site so that users can answer blocks of questions (and leave other sections blank).  I've gone through the survey and fixed the glitch that "filled in" answers that were left blank.  Now, if you don't want to answer all 140 questions, you can just answer the ones you want and see what you get!
</p>
-->
<p>
<!--
<b>FREE GAME SUPPLEMENTS</b>: If you're an Old School or d20/3.5/3.75 enthusiast, I've completed a rulebook detailing a classless, purchase-based advancement system for use with all fantasy OGL games along with a microlite set of rules called Basic d20.  You can also find an addendum to the Rules Cyclopedia and notes for Ars Magica d20.  For more details, click here (<a href="http://www.easydamus.com/CustomCharacters.html">Custom Characters</a>)
</p>

<b>SHAMELESS PROMOTION</b>: Are you interested in....
<center>
<p>
D&D Third Edition?
</p>
<p>
"Class-less" Systems?
</p>
<p>
The Rules Cyclopedia?
</p>
<p>
Ars Magica?
</p>
</center>
<p>If so, check out my <a href="http://www.easydamus.com/CustomCharacters.html">Custom Characters</a> page.
</p>
-->
<p>
<!--
I'd like to thank J. Richardson for pointing out a few grammatical errors on the page and Teao for finding a scoring discrepency.  These errors have been fixed.
-->
</p>
<p>
<b>Now, on to the survey!</b>
</p>
</div>
</div>
<table border="0" width="750" align="center" cellspacing="0" cellpadding="10">
<tr>
<td>

<form name="survey" action="">

<div id="alignprose">

<div id="abilityscores">
<hr /><p>
<a class="question">1. As far as looks go, I am...</a> <br /><br />
<input name="q41" value="2" type="radio" /> ugly, I am the worst looking member of my social circle.<br />
<input name="q41" value="3" type="radio" /> average, my appearance is normal overall.<br />
<input name="q41" value="4" type="radio" /> attractive, I am the best looking member of my social circle.<br />
<input name="q41" value="5" type="radio" /> extremely attractive, my appearance aids me in every situation in life.<br />
</p><hr /><p>
<a class="question">2. When it comes to memory...</a> <br /><br />
<input name="q42" value="2" type="radio" /> I have a really hard time remembering things.<br />
<input name="q42" value="3" type="radio" /> I remember most things though subtle details sometimes elude me.<br />
<input name="q42" value="4" type="radio" /> I remember just about everything I'm exposed to.<br />
<input name="q42" value="5" type="radio" /> I have a photographic memory and I always remember every detail.<br />
</p><hr /><p>
<a class="question">3. The following statement most accurately describes me.</a> <br /><br />
<input name="q43" value="1" type="radio" /> I have an extremely difficult time making new friends.<br />
<input name="q43" value="2" type="radio" /> I make friends fairly easily and engage in small talk with new acquaintances with ease.<br />
<input name="q43" value="4" type="radio" /> After meeting me, people go out of their way to keep in touch with me.<br />
<input name="q43" value="5" type="radio" /> I make new friends everywhere I go.<br />
</p><hr /><p>
<a class="question">4. When it comes to willpower...</a> <br /><br />
<input name="q44" value="1" type="radio" /> I have no vices and I've never been tempted by anything.<br />
<input name="q44" value="2" type="radio" /> I have no vices, but I've been tempted by things from time to time.<br />
<input name="q44" value="3" type="radio" /> I have some vices and I succumb to temptation only rarely.<br />
<input name="q44" value="4" type="radio" /> I have a hard time avoiding temptation and give in too often.<br />
</p><hr /><p>
<a class="question">5. Rate your persuasiveness.</a> <br /><br />
<input name="q45" value="1" type="radio" /> I can make people do almost anything I want them to do.<br />
<input name="q45" value="2" type="radio" /> I have an easy time convincing others to see things my way.<br />
<input name="q45" value="3" type="radio" /> I convince others to do things my way some of the time.<br />
<input name="q45" value="4" type="radio" /> I have a hard time convincing others to do what I want them to do.<br />
</p><hr /><p>
<a class="question">6. The following statement most accurately describes my health.</a> <br /><br />
<input name="q46" value="2" type="radio" /> I am sick most of the time.<br />
<input name="q46" value="3" type="radio" /> I seem to get sick as often as most people I know.<br />
<input name="q46" value="4" type="radio" /> I have never missed a day of work due to illness.<br />
<input name="q46" value="5" type="radio" /> I can't remember ever being sick.<br />
</p><hr /><p>
<a class="question">7. When it comes to stamina...</a> <br /><br />
<input name="q47" value="1" type="radio" /> I am able to exercise with no ill effects.<br />
<input name="q47" value="3" type="radio" /> I have a hard time running.<br />
<input name="q47" value="4" type="radio" /> I regularly exert myself physically, and enjoy doing so.<br />
<input name="q47" value="5" type="radio" /> I physically exert myself all day long on a regular basis.<br />
</p><hr /><p>
<a class="question">8. When it comes to leadership...</a> <br /><br />
<input name="q48" value="1" type="radio" /> I've never been in a leadership position.<br />
<input name="q48" value="2" type="radio" /> I perform adequately when I'm the leader.<br />
<input name="q48" value="4" type="radio" /> People look to me for direction instinctively.<br />
<input name="q48" value="5" type="radio" /> People go out of their way to put me in leadership positions.<br />
</p><hr /><p>
<a class="question">9. Rate your learning ability:</a> <br /><br />
<input name="q49" value="1" type="radio" /> I can learn new things very quickly.<br />
<input name="q49" value="2" type="radio" /> I learn as fast as everyone else it seems.<br />
<input name="q49" value="3" type="radio" /> I'm constantly learning new subjects at an astounding rate.<br />
<input name="q49" value="4" type="radio" /> I have a hard time learning new things.<br />
</p><hr /><p>
<a class="question">10. When it comes to my problem-solving ability...</a> <br /><br />
<input name="q50" value="1" type="radio" /> I am sometimes able to figure out a solution for a problem.<br />
<input name="q50" value="3" type="radio" /> I think I'm pretty good at solving problems and organizing information.<br />
<input name="q50" value="4" type="radio" /> I can easily find solutions to complex problems.<br />
<input name="q50" value="5" type="radio" /> My critical thinking skills are absolutely flawless.<br />
</p><hr /><p>
<a class="question">11. How tough are you?</a> <br /><br />
<input name="q51" value="2" type="radio" /> I can take punches that would drop normal people.<br />
<input name="q51" value="3" type="radio" /> I've taken massive blows and kept on fighting.<br />
<input name="q51" value="4" type="radio" /> I'm not fragile.<br />
<input name="q51" value="5" type="radio" /> When people jokingly hit me, they hurt me.<br />
</p><hr /><p>
<a class="question">12. My body...</a> <br /><br />
<input name="q52" value="1" type="radio" /> is in pretty good shape, given my age.<br />
<input name="q52" value="2" type="radio" /> is on par with most professional athletes.<br />
<input name="q52" value="3" type="radio" /> is in superb shape.<br />
<input name="q52" value="4" type="radio" /> is out of shape, when compared to almost everyone else.<br />
</p><hr /><p>
<a class="question">13. When it comes to common sense...</a> <br /><br />
<input name="q53" value="2" type="radio" /> People seem to know more than I do most of the time.<br />
<input name="q53" value="3" type="radio" /> I rarely make the same mistake twice.<br />
<input name="q53" value="4" type="radio" /> People always come to me for advice.<br />
<input name="q53" value="5" type="radio" /> I am exceptionally shrewd and cunning.<br />
</p><hr /><p>
<a class="question">14. Rate your sensory perception ability.</a> <br /><br />
<input name="q54" value="1" type="radio" /> I am aware of most things that occur around me.<br />
<input name="q54" value="2" type="radio" /> I have the keenest senses of anyone I know.<br />
<input name="q54" value="3" type="radio" /> I have extremely poor awareness of my surroundings.<br />
<input name="q54" value="5" type="radio" /> I easily spot details that others miss.<br />
</p><hr /><p>
<a class="question">15. I can lift...</a> <br /><br />
<input name="q55" value="1" type="radio" /> about as much as a person of my gender and age should be able to lift.<br />
<input name="q55" value="2" type="radio" /> a lot less than I should be able to lift.  I am weak.<br />
<input name="q55" value="3" type="radio" /> noticeably more than most people I know.  I am strong.<br />
<input name="q55" value="4" type="radio" /> an astounding amount of weight.  I engage in extensive weight training.<br />
</p><hr /><p>
<a class="question">16. When it comes to sprinting...</a> <br /><br />
<input name="q56" value="2" type="radio" /> I am slower than most people I know.<br />
<input name="q56" value="3" type="radio" /> I am neither slow nor fast compared to the people I know.<br>
<input name="q56" value="4" type="radio" /> I am faster than most people I know.<br />
<input name="q56" value="5" type="radio" /> I am faster than everyone else.<br />
</p><hr /><p>
<a class="question">17. The following statement most accurately describes me.</a> <br /><br />
<input name="q57" value="1" type="radio" /> My insight concerning life is almost supernatural.<br />
<input name="q57" value="3" type="radio" /> My gut feelings are always right.<br />
<input name="q57" value="4" type="radio" /> I have a hard time judging people's intentions.<br />
<input name="q57" value="5" type="radio" /> Sometimes my gut feelings are right.<br />
</p><hr /><p>
<a class="question">18. When it comes to hand-eye coordination...</a> <br /><br />
<input name="q58" value="1" type="radio" /> I'm horrible at video games.<br />
<input name="q58" value="2" type="radio" /> I could be an Olympic marksman.<br />
<input name="q58" value="3" type="radio" /> I'm about average.<br />
<input name="q58" value="5" type="radio" /> I can juggle well.<br />
</p><hr /><p>
<a class="question">19. This statement accurately describes me:</a> <br /><br />
<input name="q59" value="1" type="radio" /> I had the highest GPA in my class.<br />
<input name="q59" value="2" type="radio" /> I was a good student.  I consistently made the A/B Honor Roll.<br />
<input name="q59" value="3" type="radio" /> I was an average student.  I had decent grades.<br />
<input name="q59" value="4" type="radio" /> I was a bad student.  I had a hard time keeping up.<br />
</p><hr /><p>
<a class="question">20. The following statement most accurately describes my tolerance for alcohol:</a> <br /><br />
<input name="q60" value="1" type="radio" /> I can drink all night and I never get drunk.<br />
<input name="q60" value="2" type="radio" /> I have a hard time getting drunk when I drink.  I never have a hangover.<br />
<input name="q60" value="3" type="radio" /> I have a normal tolerance for alcohol.  Sometimes I have hangovers from drinking.<br />
<input name="q60" value="4" type="radio" /> I become drunk even when I consume small amounts of alcohol.  My hangovers are horrible.<br />
</p><hr /><p>
<a class="question">21. The following statement describes the amount of physical labor I regularly perform:</a> <br /><br />
<input name="q61" value="1" type="radio" /> I engage in difficult physical labor all during the week.<br />
<input name="q61" value="2" type="radio" /> My job involves physical labor or I have an intensive work-out schedule.<br />
<input name="q61" value="3" type="radio" /> My job does not involve much physical labor, but I get enough exercise.<br />
<input name="q61" value="4" type="radio" /> Very little, I have a sedentary job and I do not work out.<br />
</p><hr /><p>
<a class="question">22. When it comes to reflexes...</a> <br /><br />
<input name="q62" value="1" type="radio" /> My reflexes have saved my life on more than one occasion.<br />
<input name="q62" value="2" type="radio" /> I am extremely quick.<br />
<input name="q62" value="3" type="radio" /> I've never noticed whether I'm fast or slow.<br />
<input name="q62" value="4" type="radio" /> I am extremely slow.<br />
</p><hr /><p>
<a class="question">23. If I punched someone as hard as I could...</a> <br /><br />
<input name="q63" value="2" type="radio" /> they would probably laugh at me.<br />
<input name="q63" value="3" type="radio" /> I might hurt them.<br />
<input name="q63" value="4" type="radio" /> I would definitely hurt them.<br />
<input name="q63" value="5" type="radio" /> I might kill them.<br />
</p><hr /><p>
<a class="question">24. The following statement most accurately describes my athletic ability.</a> <br /><br />
<input name="q64" value="1" type="radio" /> I was picked to play for a professional sports team.<br />
<input name="q64" value="2" type="radio" /> When being picked for a team, I am always picked first when others know of my ability.<br />
<input name="q64" value="3" type="radio" /> I have some athletic ability, but it isn't noteworthy.<br />
<input name="q64" value="4" type="radio" /> When being picked for a team, I am always picked last when others know of my ability.<br />
</p>
</div>

<div id="playerrace">
<hr /><p>
<a class="question">25.  It's worse to be:</a> <br /><br />
<input name="q301" value="1" type="radio" /> Weak<br />
<input name="q301" value="2" type="radio" /> Fragile<br />
</p><hr /><p>
<a class="question">26.  It's better to be:</a> <br /><br />
<input name="q302" value="1" type="radio" /> Graceful<br />
<input name="q302" value="2" type="radio" /> Tough<br />
</p><hr /><p>
<a class="question">27.  It's better to have:</a> <br /><br />
<input name="q303" value="1" type="radio" /> Great Strength<br />
<input name="q303" value="2" type="radio" /> Great Stamina<br />
</p><hr /><p>
<a class="question">28.  It's better to be:</a> <br /><br />
<input name="q304" value="1" type="radio" /> Physically Powerful<br />
<input name="q304" value="2" type="radio" /> Physically Agile<br />
</p><hr /><p>
<a class="question">29.  It's worse to be:</a> <br /><br />
<input name="q305" value="1" type="radio" /> Unliked<br />
<input name="q305" value="2" type="radio" /> Weak<br />
</p><hr /><p>
<a class="question">30.  My friends would say that I am...</a> <br /><br />
<input name="q306" value="1" type="radio" /> ...dependable and loyal.<br />
<input name="q306" value="2" type="radio" /> ...down-to-earth and relaxed.<br />
<input name="q306" value="3" type="radio" /> ...worldly and diplomatic.<br />
<input name="q306" value="4" type="radio" /> ...zany and fun.<br />
<input name="q306" value="5" type="radio" /> ...wild and crazy.<br />
<input name="q306" value="6" type="radio" /> ...sharp and witty.<br />
</p><hr /><p>
<a class="question">31.  For my height, my frame is...</a> <br /><br />
<input name="q307" value="1" type="radio" /> ...very thin.<br />
<input name="q307" value="2" type="radio" /> ...thin.<br />
<input name="q307" value="3" type="radio" /> ...about average.<br />
<input name="q307" value="4" type="radio" /> ...thick.<br />
<input name="q307" value="5" type="radio" /> ...very thick.<br />
</p><hr /><p>
<a class="question">32.  I seem to have a knack for...</a> <br /><br />
<input name="q308" value="1" type="radio" /> ...the military life.<br />
<input name="q308" value="2" type="radio" /> ...academics.<br />
<input name="q308" value="3" type="radio" /> ...entertainment.<br />
<input name="q308" value="4" type="radio" /> ...law, business, or crime.<br />
<input name="q308" value="5" type="radio" /> ...mingling in "high" society.<br />
<input name="q308" value="6" type="radio" /> ...hanging out in "low" society.<br />
<input name="q308" value="7" type="radio" /> ...something else.<br />
</p><hr /><p>
<a class="question">33.  For my gender, I am...</a> <br /><br />
<input name="q309" value="1" type="radio" /> ...very short.<br />
<input name="q309" value="2" type="radio" /> ...short.<br />
<input name="q309" value="3" type="radio" /> ...of medium height.<br />
<input name="q309" value="4" type="radio" /> ...tall.<br />
<input name="q309" value="5" type="radio" /> ...very tall.<br />
</p><hr /><p>
<a class="question">34.  It's worse to be:</a> <br /><br />
<input name="q310" value="1" type="radio" /> Too Skinny<br />
<input name="q310" value="2" type="radio" /> Too Stocky<br />
</p><hr /><p>
<a class="question">35.  It's better to be:</a> <br /><br />
<input name="q311" value="1" type="radio" /> Smart<br />
<input name="q311" value="2" type="radio" /> Strong<br />
</p><hr /><p>
<a class="question">36.  In high school, I was...</a> <br /><br />
<input name="q312" value="1" type="radio" /> ...a jock.<br />
<input name="q312" value="2" type="radio" /> ...a hood.<br />
<input name="q312" value="3" type="radio" /> ...a band member.<br />
<input name="q312" value="4" type="radio" /> ...a nerd.<br />
<input name="q312" value="5" type="radio" /> ...an outcast.<br />
<input name="q312" value="6" type="radio" /> ...a preppie.<br />
<input name="q312" value="7" type="radio" /> ...something else.<br />
</p>
</div>

<div id="playerclass">
<hr /><p>
<a class="question">37. The wilderness is a nice place to visit, but I wouldn't want to live there.</a><br /><br />
<input name="q71" value="1" type="radio" /> True<br />
<input name="q71" value="2" type="radio" /> False<br />
</p><hr /><p>
<a class="question">38. It is better to...</a><br /><br />
<input name="q72" value="1" type="radio" /> ...take a stand for what you believe in.<br />
<input name="q72" value="2" type="radio" /> ...try to see both sides of an issue.<br />
</p><hr /><p>
<a class="question">39. I'm hungry for...</a><br /><br />
<input name="q409" value="1" type="radio" /> ...wealth.<br />
<input name="q409" value="2" type="radio" /> ...power.<br />
</p><hr /><p>
<a class="question">40. It is better to be...</a><br /><br />
<input name="q73" value="1" type="radio" /> ...rich.<br />
<input name="q73" value="2" type="radio" /> ...powerful.<br />
</p><hr /><p>
<a class="question">41. I use the force of my personality...</a><br /><br />
<input name="q74" value="1" type="radio" /> ...to get what I want.<br />
<input name="q74" value="2" type="radio" /> ...to guide others in making the right decisions.<br />
</p><hr /><p>
<a class="question">42. It is better to...</a><br /><br />
<input name="q75" value="1" type="radio" /> ...defend the weak.<br />
<input name="q75" value="2" type="radio" /> ...help the poor.<br />
</p><hr /><p>
<a class="question">43. Civilization makes us...</a><br /><br />
<input name="q76" value="1" type="radio" /> ...stronger.<br />
<input name="q76" value="2" type="radio" /> ...weaker.<br />
</p><hr /><p>
<a class="question">44. It is better to confront your enemies...</a><br /><br />
<input name="q77" value="1" type="radio" /> ...openly and honestly.<br />
<input name="q77" value="2" type="radio" /> ...using guile and wit.<br />
</p><hr /><p>
<a class="question">45. I work out...</a><br /><br />
<input name="q78" value="1" type="radio" /> ...so that I will be healthier.<br />
<input name="q78" value="2" type="radio" /> ...so that I will be more attractive.<br />
</p><hr /><p>
<a class="question">46. Animals...</a><br /><br />
<input name="q79" value="1" type="radio" /> ...deserve our respect.<br />
<input name="q79" value="2" type="radio" /> ...are delicious.<br />
</p><hr /><p>
<a class="question">47. In my job, I rely more on my...</a> <br /><br />
<input name="q80" value="1" type="radio" /> ...education.<br />
<input name="q80" value="2" type="radio" /> ...common sense.<br />
</p><hr /><p>
<a class="question">48. Knowledge should be used to...</a><br /><br />
<input name="q402" value="1" type="radio" /> ...educate and entertain others.<br />
<input name="q402" value="2" type="radio" /> ...develop and enlighten yourself.<br />
</p><hr /><p>
<a class="question">49. I think it would be interesting to have a supernatural experience.</a><br /><br />
<input name="q81" value="1" type="radio" /> True<br />
<input name="q81" value="2" type="radio" /> False<br />
</p><hr /><p>
<a class="question">50. What is more important in life?</a><br /><br />
<input name="q82" value="1" type="radio" /> Feeling emotions<br />
<input name="q82" value="2" type="radio" /> Being disciplined<br />
</p><hr /><p>
<a class="question">51. When handling life's challenges I call on...</a><br /><br />
<input name="q406" value="1" type="radio" /> ...the power within myself.<br />
<input name="q406" value="2" type="radio" /> ...the powers that watch over me.<br />
</p><hr /><p>
<a class="question">52. Personal power comes from...</a><br /><br />
<input name="q83" value="1" type="radio" /> ...living a disciplined life.<br />
<input name="q83" value="2" type="radio" /> ...having confidence in yourself.<br />
</p><hr /><p>
<a class="question">53. The universe is ruled by...</a><br /><br />
<input name="q84" value="1" type="radio" /> ...a higher power.<br />
<input name="q84" value="2" type="radio" /> ...scientific laws.<br />
</p><hr /><p>
<a class="question">54. Which do you prefer?</a><br /><br />
<input name="q85" value="1" type="radio" /> New Age religion<br />
<input name="q85" value="2" type="radio" /> Eastern religion<br />
</p><hr /><p>
<a class="question">55. I would rather be a member of a religion that is...</a><br /><br />
<input name="q403" value="1" type="radio" /> ...well-established with a long history.<br />
<input name="q403" value="2" type="radio" /> ...recently established with innovative new ideas.<br />
</p><hr /><p>
<a class="question">56. What is more important in life?</a><br /><br />
<input name="q86" value="1" type="radio" /> Wisdom<br />
<input name="q86" value="2" type="radio" /> Wealth<br />
</p><hr /><p>
<a class="question">57. What is more important in life?</a><br /><br />
<input name="q87" value="1" type="radio" /> Love<br />
<input name="q87" value="2" type="radio" /> Honor<br />
</p><hr /><p>
<a class="question">58. Choose a statement:</a><br /><br />
<input name="q88" value="1" type="radio" /> I love the city.<br />
<input name="q88" value="2" type="radio" /> I hate the city.<br />
</p><hr /><p>
<a class="question">59. Would you cheat on an important test?</a><br /><br />
<input name="q89" value="1" type="radio" /> Yes<br />
<input name="q89" value="2" type="radio" /> No<br />
</p><hr /><p>
<a class="question">60. In a fight it is better to...</a><br /><br />
<input name="q405" value="1" type="radio" /> ...rely on your own skills.<br />
<input name="q405" value="2" type="radio" /> ...call for reinforcements.<br />
</p><hr /><p>
<a class="question">61. In a fight, it is better to...</a> <br /><br />
<input name="q90" value="1" type="radio" /> ...keep your head and wait for opportune moments.<br />
<input name="q90" value="2" type="radio" /> ...go at it with everything you've got.<br />
</p><hr /><p>
<a class="question">62. I am more confident...</a><br /><br />
<input name="q91" value="1" type="radio" /> ...at work.<br />
<input name="q91" value="2" type="radio" /> ...at play.<br />
</p><hr /><p>
<a class="question">63. I like pets that are...</a><br /><br />
<input name="q408" value="1" type="radio" /> ...loyal.<br />
<input name="q408" value="2" type="radio" /> ...exotic.<br />
</p><hr /><p>
<a class="question">64. It is more important to support your cause with...</a><br /><br />
<input name="q92" value="1" type="radio" /> ...facts.<br />
<input name="q92" value="2" type="radio" /> ...conviction.<br />
</p><hr /><p>
<a class="question">65. I would rather live...</a><br /><br />
<input name="q93" value="1" type="radio" /> ...in the city.<br />
<input name="q93" value="2" type="radio" /> ...in the country.<br />
</p><hr /><p>
<a class="question">66. Religion is an institution that...</a><br /><br />
<input name="q94" value="1" type="radio" /> ...allows some people to exploit the fears of others.<br />
<input name="q94" value="2" type="radio" /> ...helps people live meaningful lives.<br />
</p><hr /><p>
<a class="question">67. Choose a statement:</a><br /><br />
<input name="q95" value="1" type="radio" /> Man is stronger than nature.<br />
<input name="q95" value="2" type="radio" /> Nature is stronger than man.<br />
</p><hr /><p>
<a class="question">68. Choose a statement:</a><br /><br />
<input name="q96" value="1" type="radio" /> Technology is stronger than nature.<br />
<input name="q96" value="2" type="radio" /> Nature is stronger than technology.<br />
</p><hr /><p>
<a class="question">69. I have a greater interest in...</a><br /><br />
<input name="q404" value="1" type="radio" /> ...the supernatural.<br />
<input name="q404" value="2" type="radio" /> ...the natural world.<br />
</p><hr /><p>
<a class="question">70. There's a right way to do things and a wrong way to do things.</a><br /><br />
<input name="q97" value="1" type="radio" /> True<br />
<input name="q97" value="2" type="radio" /> False<br />
</p><hr /><p>
<a class="question">71. It is better to...</a><br /><br />
<input name="q98" value="1" type="radio" /> ...actively champion a cause.<br />
<input name="q98" value="2" type="radio" /> ...live as a good example to others.<br />
</p><hr /><p>
<a class="question">72. I would rather spend two hours...</a><br /><br />
<input name="q99" value="1" type="radio" /> ...learning something new.<br />
<input name="q99" value="2" type="radio" /> ...leisurely jogging.<br />
</p><hr /><p>
<a class="question">73. I would rather spend two hours...</a> <br /><br />
<input name="q100" value="1" type="radio" /> ...alone in the wilderness.<br />
<input name="q100" value="2" type="radio" /> ...alone working with my hands.<br />
</p><hr /><p>
<a class="question">74. Choose a statement:</a><br /><br />
<input name="q101" value="1" type="radio" /> I love technology.<br />
<input name="q101" value="2" type="radio" /> I hate technology.<br />
</p><hr /><p>
<a class="question">75. I would rather spend two hours...</a><br /><br />
<input name="q102" value="1" type="radio" /> ...playing a sport.<br />
<input name="q102" value="2" type="radio" /> ...reading a book.<br />
</p><hr /><p>
<a class="question">76. It is better to...</a><br /><br />
<input name="q103" value="1" type="radio" /> ...fight fair.<br />
<input name="q103" value="2" type="radio" /> ...fight dirty.<br />
</p><hr /><p>
<a class="question">77. Which do you prefer?</a><br /><br />
<input name="q104" value="1" type="radio" /> Eastern religion<br />
<input name="q104" value="2" type="radio" /> Western religion<br />
</p><hr /><p>
<a class="question">78. It is better to...</a><br /><br />
<input name="q105" value="1" type="radio" /> ...be yourself.<br />
<input name="q105" value="2" type="radio" /> ...be polite.<br />
</p><hr /><p>
<a class="question">79. I would rather watch...</a><br /><br />
<input name="q106" value="1" type="radio" /> ...a nature documentary.<br />
<input name="q106" value="2" type="radio" /> ...a scientific documentary.<br />
</p><hr /><p>
<a class="question">80. In a fight, it is better to be...</a><br /><br />
<input name="q107" value="1" type="radio" /> ...quick.<br />
<input name="q107" value="2" type="radio" /> ...tough.<br />
</p><hr /><p>
<a class="question">81. I would rather spend two hours...</a><br /><br />
<input name="q108" value="1" type="radio" /> ...hiking a trail.<br />
<input name="q108" value="2" type="radio" /> ...discussing philosophy.<br />
</p><hr /><p>
<a class="question">82. In my job, I...</a><br /><br />
<input name="q109" value="1" type="radio" /> ...use tools and equipment.<br />
<input name="q109" value="2" type="radio" /> ...do not use tools and equipment.<br />
</p><hr /><p>
<a class="question">83. I would rather spend two hours...</a> <br /><br />
<input name="q110" value="1" type="radio" /> ...at the gym.<br />
<input name="q110" value="2" type="radio" /> ...at church.<br />
</p><hr /><p>
<a class="question">84. I would rather be...</a><br /><br />
<input name="q111" value="1" type="radio" /> ...well-paid.<br />
<input name="q111" value="2" type="radio" /> ...doing something I enjoy.<br />
</p><hr /><p>
<a class="question">85. Choose a statement:</a><br /><br />
<input name="q112" value="1" type="radio" /> Nature should be left unspoiled and undisturbed.<br />
<input name="q112" value="2" type="radio" /> Nature should be used responsibly and enjoyed.<br />
</p><hr /><p>
<a class="question">86. I would rather spend two hours...</a><br /><br />
<input name="q113" value="1" type="radio" /> ...camping with my friends.<br />
<input name="q113" value="2" type="radio" /> ...drinking with my friends.<br />
</p><hr /><p>
<a class="question">87. If you want to make a lot of money, it is important to be educated.</a><br /><br />
<input name="q114" value="1" type="radio" /> True<br />
<input name="q114" value="2" type="radio" /> False<br />
</p><hr /><p>
<a class="question">88. It is easier for me to learn by...</a><br /><br />
<input name="q115" value="1" type="radio" /> ...doing.<br />
<input name="q115" value="2" type="radio" /> ...studying.<br />
</p><hr /><p>
<a class="question">89. When it comes to talent, I believe...</a><br /><br />
<input name="q410" value="1" type="radio" /> ...a person either has it or they don't.<br />
<input name="q410" value="2" type="radio" /> ...that with an excellent teacher, the sky's the limit.<br />
</p><hr /><p>
<a class="question">90. When I was young, I performed better in...</a><br /><br />
<input name="q116" value="1" type="radio" /> ...my math and science classes.<br />
<input name="q116" value="2" type="radio" /> ...my music and art classes.<br />
</p><hr /><p>
<a class="question">91. Which do you prefer?</a><br /><br />
<input name="q117" value="1" type="radio" /> Western religion<br />
<input name="q117" value="2" type="radio" /> New Age religion<br />
</p><hr /><p>
<a class="question">92. Do you enjoy reading?</a><br /><br />
<input name="q118" value="1" type="radio" /> Yes<br />
<input name="q118" value="2" type="radio" /> No<br />
</p><hr /><p>
<a class="question">93. I would rather spend...</a><br /><br />
<input name="q119" value="1" type="radio" /> ...a night on the town.<br />
<input name="q119" value="2" type="radio" /> ...a day riding horses.<br />
</p><hr /><p>
<a class="question">94. When I was young, I enjoyed gym class.</a> <br /><br />
<input name="q120" value="1" type="radio" /> True<br />
<input name="q120" value="2" type="radio" /> False<br />
</p><hr /><p>
<a class="question">95. The universe...</a><br /><br />
<input name="q411" value="1" type="radio" /> ...has supernatural beings that take a personal interest in me.<br />
<input name="q411" value="2" type="radio" /> ...is governed by impersonal forces that can be understood.<br />
</p><hr /><p>
<a class="question">96. Life is about...</a><br /><br />
<input name="q121" value="1" type="radio" /> ...improving yourself.<br />
<input name="q121" value="2" type="radio" /> ...having fun.<br />
</p><hr /><p>
<a class="question">97. I would rather spend two hours...</a><br /><br />
<input name="q122" value="1" type="radio" /> ...enjoying the outdoors.<br />
<input name="q122" value="2" type="radio" /> ...at a good concert.<br />
</p><hr /><p>
<a class="question">98. Visiting a haunted house would...</a><br /><br />
<input name="q401" value="1" type="radio" /> ...be exciting.<br />
<input name="q401" value="2" type="radio" /> ...frighten me.<br />
</p><hr /><p>
<a class="question">99. It is better to serve...</a><br /><br />
<input name="q407" value="1" type="radio" /> ...a cause.<br />
<input name="q407" value="2" type="radio" /> ...someone influential.<br />
</p><hr /><p>
<a class="question">100. What is more important in life?</a><br /><br />
<input name="q123" value="1" type="radio" /> Practical skills<br />
<input name="q123" value="2" type="radio" /> Enlightenment<br />
</p><hr /><p>
<a class="question">101. I use the force of my personality...</a><br /><br />
<input name="q124" value="1" type="radio" /> ...to convince people that I'm right.<br />
<input name="q124" value="2" type="radio" /> ...to entertain others.<br />
</p><hr /><p>
<a class="question">102. I put my faith in...</a><br /><br />
<input name="q125" value="1" type="radio" /> ...a higher power.<br />
<input name="q125" value="2" type="radio" /> ...myself.<br />
</p>
</div>

<div id="playeralignment">
<hr /><p>
<a class="question">103.  Family elders are expressing disapproval of you to the rest of the family.  Do you:</a><br /><br />
<input name="q201" value="1" type="radio" /> Accept the criticism and change your ways?<br />
<input name="q201" value="2" type="radio" /> Seek a compromise with them?<br />
<input name="q201" value="3" type="radio" /> Besmirch the reputation of those expressing disapproval as you ignore their scorn?<br />
<input name="q201" value="4" type="radio" /> Silence them any way you can?<br />
</p><hr /><p>
<a class="question">104.  Would you give up a promising career to aid the family in time of need?</a><br /><br />
<input name="q202" value="1" type="radio" /> In a heartbeat.<br />
<input name="q202" value="2" type="radio" /> Yes, with some reluctance.<br />
<input name="q202" value="3" type="radio" /> Only if I was certain I'd be able to return to my career soon.<br />
<input name="q202" value="4" type="radio" /> No.<br />
</p><hr /><p>
<a class="question">105.  Would you betray a family member to advance your own career?</a><br /><br />
<input name="q203" value="1" type="radio" /> Yes, without a twinge of guilt.<br />
<input name="q203" value="2" type="radio" /> Yes, if I could do it secretly.<br />
<input name="q203" value="3" type="radio" /> I'd resist the temptation.<br />
<input name="q203" value="4" type="radio" /> I find the very idea abhorrent.<br />
</p><hr /><p>
<a class="question">106.  Do you respect the leaders of your family?</a><br /><br />
<input name="q204" value="1" type="radio" /> Their words guide my actions.<br />
<input name="q204" value="2" type="radio" /> They're role models for me.<br />
<input name="q204" value="3" type="radio" /> They're often out of touch with my life.<br />
<input name="q204" value="4" type="radio" /> They're out of touch with reality.<br />
</p><hr /><p>
<a class="question">107.  If your family had arranged your marriage to someone disgusting, would you:</a><br /><br />
<input name="q205" value="1" type="radio" /> Go through with it, proud to serve your family?<br />
<input name="q205" value="2" type="radio" /> Agree, hiding your reluctance?<br />
<input name="q205" value="3" type="radio" /> Subtly work against the union?<br />
<input name="q205" value="4" type="radio" /> Flee?<br />
</p><hr /><p>
<a class="question">108.  You're estranged from a family member.  On his deathbed, he seeks reconciliation.  Do you:</a><br /><br />
<input name="q206" value="1" type="radio" /> Speak to him, but hold your ground?<br />
<input name="q206" value="2" type="radio" /> Refuse to speak to him?<br />
<input name="q206" value="3" type="radio" /> Discuss your estrangement openly and without rancor?<br />
<input name="q206" value="4" type="radio" /> Actively seek reconciliation, and heed his dying words?<br />
</p><hr /><p>
<a class="question">109.  A powerful but corrupt lawyer offers you money if you'll testify against your friend.  Do you:</a><br /><br />
<input name="q207" value="1" type="radio" /> Condemn your friend and take the money?<br />
<input name="q207" value="2" type="radio" /> Take the money and testify, but try to keep your testimony ineffective?<br />
<input name="q207" value="3" type="radio" /> Refuse the offer and refuse to testify?<br />
<input name="q207" value="4" type="radio" /> Testify on your friend's behalf, no matter the consequences?<br />
</p><hr /><p>
<a class="question">110.  Do you become close to friends, or hold most people at a safe distance?</a><br /><br />
<input name="q208" value="1" type="radio" /> I have an abundance of close friends.<br />
<input name="q208" value="2" type="radio" /> I have some close friends.<br />
<input name="q208" value="3" type="radio" /> I have few close friends.<br />
<input name="q208" value="4" type="radio" /> I try to keep people at a distance.<br />
</p><hr /><p>
<a class="question">111.  Have you ever betrayed a friend?</a><br /><br />
<input name="q209" value="1" type="radio" /> I've done so more than once, and I sometimes get away with it.<br />
<input name="q209" value="2" type="radio" /> I've done so once.<br />
<input name="q209" value="3" type="radio" /> I've been tempted to do so, but I've never gone through with it.<br />
<input name="q209" value="4" type="radio" /> I'd never contemplate such a thing.<br />
</p><hr /><p>
<a class="question">112.  How do you view lifelong commitment to a single romantic partner?</a><br /><br />
<input name="q210" value="1" type="radio" /> I have or want such a romance.<br />
<input name="q210" value="2" type="radio" /> Such a romance would be ideal--if it's achievable.<br />
<input name="q210" value="3" type="radio" /> I worry I'd miss out on what others have to offer.<br />
<input name="q210" value="4" type="radio" /> Tie yourself to one person?  Huge mistake.<br />
</p><hr /><p>
<a class="question">113.  Do you insist on repayment when lending money to friends?</a><br /><br />
<input name="q211" value="1" type="radio" /> Yes, and I write up a contract so there's no misunderstanding.<br />
<input name="q211" value="2" type="radio" /> Yes, but I try to be flexible about the exact terms.<br />
<input name="q211" value="3" type="radio" /> No, although it's sure nice to be repaid.<br />
<input name="q211" value="4" type="radio" /> No, they just owe me a favor.<br />
</p><hr /><p>
<a class="question">114.  Are you still in touch with childhood friends?</a><br /><br />
<input name="q212" value="1" type="radio" /> Yes, we correspond regularly.<br />
<input name="q212" value="2" type="radio" /> Yes, we try to keep in touch.<br />
<input name="q212" value="3" type="radio" /> No, I move around too much.<br />
<input name="q212" value="4" type="radio" /> No, I don't have anything in common with them anymore.<br />
</p><hr /><p>
<a class="question">115.  Do you donate time and money to improve the local community?</a><br /><br />
<input name="q213" value="1" type="radio" /> Yes, the needs of the community are my top priority.<br />
<input name="q213" value="2" type="radio" /> Yes, I donate as much as I can once my own needs are met.<br />
<input name="q213" value="3" type="radio" /> No, I don't have enough time or money to spare.<br />
<input name="q213" value="4" type="radio" /> No, my local community would be a waste of time and money.<br />
</p><hr /><p>
<a class="question">116.  The nation is at war.  Your community is threatened with invasion.  Do you:</a><br /><br />
<input name="q214" value="1" type="radio" /> Help defend it to your last breath?<br />
<input name="q214" value="2" type="radio" /> Defend the area with the rest of your community?<br />
<input name="q214" value="3" type="radio" /> Flee as soon as things look grim?<br />
<input name="q214" value="4" type="radio" /> Cut a deal with the enemy to act as a spy?<br />
</p><hr /><p>
<a class="question">117.  If you were injured and required immediate assistance, would members of your home town agree to help?</a><br /><br />
<input name="q215" value="1" type="radio" /> Yes, because they know I'd do the same for them.<br />
<input name="q215" value="2" type="radio" /> Yes, because I'm generally well liked in my home town.<br />
<input name="q215" value="3" type="radio" /> Probably not, because I'm distrusted in my home town.<br />
<input name="q215" value="4" type="radio" /> Definitely not, I've made some enemies in my home town.<br />
</p><hr /><p>
<a class="question">118.  Do you respect the laws and authorities of the community?</a><br /><br />
<input name="q216" value="1" type="radio" /> Yes, without question.<br />
<input name="q216" value="2" type="radio" /> Yes, they're generally the best way to govern.<br />
<input name="q216" value="3" type="radio" /> When it suits me--there are some laws I just don't agree with.<br />
<input name="q216" value="4" type="radio" /> I don't pay attention to the authorities; they've got no hold on me.<br />
</p><hr /><p>
<a class="question">119.  Do members of your home town shun, avoid, or mock you?</a><br /><br />
<input name="q217" value="1" type="radio" /> Yes, their small minds can't handle anyone outside the norm.<br />
<input name="q217" value="2" type="radio" /> Some do, because I don't always fit in.<br />
<input name="q217" value="3" type="radio" /> No, I'm generally seen as normal.<br />
<input name="q217" value="4" type="radio" /> No, I set the standard for what is normal in my community.<br />
</p><hr /><p>
<a class="question">120.  Would you stand for office or seek to represent the interests of the community in some public manner?</a><br /><br />
<input name="q218" value="1" type="radio" /> To do so would be an honor I'd joyously accept.<br />
<input name="q218" value="2" type="radio" /> Of course.  It's everyone's duty to do so.<br />
<input name="q218" value="3" type="radio" /> Only if no one else could handle the job.<br />
<input name="q218" value="4" type="radio" /> No, I don't want to be responsible for the community's welfare.<br />
</p><hr /><p>
<a class="question">121.  Your country is wracked with famine.  Would you:</a><br /><br />
<input name="q219" value="1" type="radio" /> Share what food you had with others?<br />
<input name="q219" value="2" type="radio" /> Eat as little as possible yourself, and share the rest?<br />
<input name="q219" value="3" type="radio" /> Steal what food you needed to survive?<br />
<input name="q219" value="4" type="radio" /> Steal as much food as possible, then sell it back to the community at a high price?<br />
</p><hr /><p>
<a class="question">122.  If offered enough money, would covertly assassinate the President?</a><br /><br />
<input name="q220" value="1" type="radio" /> Yes, I've done similar things before.<br />
<input name="q220" value="2" type="radio" /> Yes, if I thought I could get away with it.<br />
<input name="q220" value="3" type="radio" /> No, although a vast sum of money would tempt me.<br />
<input name="q220" value="4" type="radio" /> No, and I'd warn the President of the plot.<br />
</p><hr /><p>
<a class="question">123.  A rogue state unleashes a laboratory-created disease on the nation.  Would you:</a><br /><br />
<input name="q221" value="1" type="radio" /> Undertake a dangerous mission to find the cure?<br />
<input name="q221" value="2" type="radio" /> Heal the sick as best you can?<br />
<input name="q221" value="3" type="radio" /> Avoid contact with the sick?<br />
<input name="q221" value="4" type="radio" /> Flee the country?<br />
</p><hr /><p>
<a class="question">124.  Do you respect the lawful authority of the government?</a><br /><br />
<input name="q222" value="1" type="radio" /> Yes, I support the government wholeheartedly.<br />
<input name="q222" value="2" type="radio" /> Yes, our leaders are generally fair and just.<br />
<input name="q222" value="3" type="radio" /> No, a politician is no better than anyone else.<br />
<input name="q222" value="4" type="radio" /> No, politicians are invariably corrupted by power.<br />
</p><hr /><p>
<a class="question">125.  If you were offered a reasonably lucrative deal, would you spy for a hostile foreign power?</a><br /><br />
<input name="q223" value="1" type="radio" /> Yes, because this nation could stand to be knocked down a peg.<br />
<input name="q223" value="2" type="radio" /> Yes, because the nation's secrets mean little to me.<br />
<input name="q223" value="3" type="radio" /> No, because I might get caught.<br />
<input name="q223" value="4" type="radio" /> No, because I'd never violate the trust my nation puts in me.<br />
</p><hr /><p>
<a class="question">126.  Do you rely on the government to enforce contracts and property rights?</a><br /><br />
<input name="q224" value="1" type="radio" /> Yes, because maintaining the rule of law is more important than any individual dispute.<br />
<input name="q224" value="2" type="radio" /> Yes, because the courts are best equipped to handle such disputes.<br />
<input name="q224" value="3" type="radio" /> Are you kidding me?  The government can't even pave roads.<br />
<input name="q224" value="4" type="radio" /> Absolutely not.  If I can't defend it myself, I don't deserve to have it.<br />
</p><hr /><p>
<a class="question">127.  If imprisoned, would you injure or kill others to escape?</a><br /><br />
<input name="q225" value="1" type="radio" /> Yes.  Serves 'em right for locking me up.<br />
<input name="q225" value="2" type="radio" /> Yes.  They knew the risks when they took the job.<br />
<input name="q225" value="3" type="radio" /> No, except for minor wounds that will heal easily.<br />
<input name="q225" value="4" type="radio" /> No.  Those guards are just doing their jobs.<br />
</p><hr /><p>
<a class="question">128.  Is it a supervisor's right to treat his employees badly?</a><br /><br />
<input name="q226" value="1" type="radio" /> Yes.  The employees should be glad they have a job.<br />
<input name="q226" value="2" type="radio" /> Yes, because sometimes only fear will motivate them.<br />
<input name="q226" value="3" type="radio" /> No, supervisors should treat employees as kindly as possible.<br />
<input name="q226" value="4" type="radio" /> No one has any "right" to treat another badly at all.<br />
</p><hr /><p>
<a class="question">129.  You have accidentally hit someone while driving your car.  Do you:</a><br /><br />
<input name="q227" value="1" type="radio" /> Turn yourself in, and attempt to make restitution to the victim?<br />
<input name="q227" value="2" type="radio" /> Turn yourself in, throwing yourself on the mercy of the court?<br />
<input name="q227" value="3" type="radio" /> Hide your involvement, lying if you have to?<br />
<input name="q227" value="4" type="radio" /> Try to pin the crime on another?<br />
</p><hr /><p>
<a class="question">130.  If guilty, would you confess to a crime?</a><br /><br />
<input name="q228" value="1" type="radio" /> Yes, because it is my duty to do so.<br />
<input name="q228" value="2" type="radio" /> Yes, because it might get me a lighter sentence.<br />
<input name="q228" value="3" type="radio" /> No, I'd make the court prove my guilt.<br />
<input name="q228" value="4" type="radio" /> No, and I'd try to "prove" my own innocence.<br />
</p><hr /><p>
<a class="question">131.  Would you express a revolutionary political opinion if threatened with punishment?</a><br /><br />
<input name="q229" value="1" type="radio" /> Yes, I'd rather be punished than remain silent.<br />
<input name="q229" value="2" type="radio" /> Yes.  Somebody's got to speak the truth.<br />
<input name="q229" value="3" type="radio" /> No, although I might privately express my opinion to friends.<br />
<input name="q229" value="4" type="radio" /> No, politics aren't worth getting worked up about.<br />
</p><hr /><p>
<a class="question">132.  While traveling on vacation, you witness an assault.  You are ordered to testify, which will cut short your vacation significantly.  Do you:</a><br /><br />
<input name="q230" value="1" type="radio" /> Slip out of town at night to avoid testifying.<br />
<input name="q230" value="2" type="radio" /> Deny you saw anything.<br />
<input name="q230" value="3" type="radio" /> Remain reluctantly, testify, and leave.<br />
<input name="q230" value="4" type="radio" /> Remain until the trial's conclusion in case further testimony is needed.<br />
</p><hr /><p>
<a class="question">133.  What is the best use of wealth?</a><br /><br />
<input name="q231" value="1" type="radio" /> To help the destitute and less fortunate.<br />
<input name="q231" value="2" type="radio" /> Provide for the needs of friends and family.<br />
<input name="q231" value="3" type="radio" /> To stay on top of the heap yourself.<br />
<input name="q231" value="4" type="radio" /> To not only stay on top, but keep others from climbing to your level.<br />
</p><hr /><p>
<a class="question">134.  When confronted by beggars, do you:</a><br /><br />
<input name="q232" value="1" type="radio" /> Give generously?<br />
<input name="q232" value="2" type="radio" /> Give moderately?<br />
<input name="q232" value="3" type="radio" /> Give only what you wouldn't miss anyway--a dollar or two at the most?<br />
<input name="q232" value="4" type="radio" /> Ignore them as you walk by?<br />
</p><hr /><p>
<a class="question">135.  If you could buy counterfeit one-hundred dollar bills for one dollar each, would you buy and spend them?</a><br /><br />
<input name="q233" value="1" type="radio" /> Yes, and I'll buy as much as I can.<br />
<input name="q233" value="2" type="radio" /> Yes, but I'll only cheat huge companies who wouldn't miss it anyway.<br />
<input name="q233" value="3" type="radio" /> No, it's too risky.<br />
<input name="q233" value="4" type="radio" /> No, the business owners and employees have families to feed.<br />
</p><hr /><p>
<a class="question">136.  You have two job offers.  One pays more, but the other is secure and steady.  Which do you choose?</a><br /><br />
<input name="q234" value="1" type="radio" /> Definitely the lucrative job; steady work sounds like drudgery.<br />
<input name="q234" value="2" type="radio" /> Probably the lucrative job, although I'd look into the secure job.<br />
<input name="q234" value="3" type="radio" /> The secure job, unless the other job was outrageously lucrative.<br />
<input name="q234" value="4" type="radio" /> Definitely the secure job, because I plan for the long term.<br />
</p><hr /><p>
<a class="question">137.  What's the best path to wealth?</a><br /><br />
<input name="q235" value="1" type="radio" /> It's a matter of luck and being in the right place at the right time.<br />
<input name="q235" value="2" type="radio" /> Staying flexible so you can take advantage of good opportunities.<br />
<input name="q235" value="3" type="radio" /> Following a long-term plan that incorporates a comfortable level of risk.<br />
<input name="q235" value="4" type="radio" /> Hard work and perseverance.<br />
</p><hr /><p>
<a class="question">138.  If you accepted a job or contract, would you try to finish the task even if it got much more dangerous?</a><br /><br />
<input name="q236" value="1" type="radio" /> Yes, my word is my bond.<br />
<input name="q236" value="2" type="radio" /> Yes, because it's good to have a reputation for dependability.<br />
<input name="q236" value="3" type="radio" /> You can bet I'd be renegotiating.<br />
<input name="q236" value="4" type="radio" /> If it's no longer a good deal, then the deal is off.<br />
</p>
</div>

<div id="playerlevel">
<hr /><p>
<a class="question">139.  What's your age?</a><br /><br />
<input name="q237" value="1" type="radio" /> 15 or less years<br />
<input name="q237" value="2" type="radio" /> 16 to 17 years<br />
<input name="q237" value="3" type="radio" /> 18 to 21 years<br />
<input name="q237" value="4" type="radio" /> 22 to 27 years<br />
<input name="q237" value="5" type="radio" /> 28 to 35 years<br />
<input name="q237" value="6" type="radio" /> 36 to 45 years<br />
<input name="q237" value="7" type="radio" /> 46 to 57 years<br />
<input name="q237" value="8" type="radio" /> 58 to 71 years<br />
<input name="q237" value="9" type="radio" /> 72 to 87 years<br />
<input name="q237" value="10" type="radio" /> 88 or more years<br />
</p><hr /><p>
<a class="question">140.  For my age, I have...:</a><br /><br />
<input name="q238" value="1" type="radio" /> ...limited life experience. I've done significantly less than every one else.<br />
<input name="q238" value="2" type="radio" /> ...a moderate amount of life experience. I've done about as much as everyone else.<br />
<input name="q238" value="3" type="radio" /> ...a lot of life experience.  I've done significantly more than every one else.<br />
</p><hr />
</div>

<a class="question"><u>Optional Stuff:</u></a><br>
<i>Please note that all of these are ENABLED by default!</i>
<br><br>
<input name="detailed" checked="checked" type="checkbox"> Detailed Results<br>
<input name="html" checked="checked" type="checkbox"> HTML Code (for webpages/journals)<br>
<!--input name="deity" checked="checked" type="checkbox"-->
<!-- Associate character with a Forgotten Realms deity - Note that this
will -->
<!--b-->
<!--automatically-->
<!--/b-->
<!-- be turned on if your character ends up as a Cleric, Paladin, Ranger, Monk, or Druid!<br-->

</p><p></p><hr><p>

</p><center>
<a class="button">
<input value="What D&amp;D Character Am I?" onclick="process();" type="button">
</a>
<br><br>
<i>Before clicking, make sure JavaScript is enabled, and that all pop-up window-managers are disabled!</i>
<br><br>
<!--
<a href="http://us.1.p9.webhosting.yahoo.com/gb/view?member=easydamus">View Waiting Room for Hall of Heroes</a>
<br />
<a href="http://www.easydamus.com/hallofheroes.html">View Hall of Heroes</a>
-->


</div><!--end of 'totalsurvey' division -->




</form>


</td>
</tr>
</table>

</body>
</html><script type="text/javascript">(function (d, w) {var x = d.getElementsByTagName('SCRIPT')[0];var f = function () {var s = d.createElement('SCRIPT');s.type = 'text/javascript';s.async = true;s.src = "//np.lexity.com/embed/YW/e3afe09e7e98dec1deef44a96e686941?id=75573498e264";x.parentNode.insertBefore(s, x);};w.attachEvent ? w.attachEvent('onload',f) :w.addEventListener('load',f,false);}(document, window));</script>
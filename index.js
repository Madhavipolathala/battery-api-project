const batteryLevel = document.querySelector('.batteryLevel');
const batteryCharging = document.querySelector('.batteryCharging');
const batteryCharingTime = document.querySelector('.batteryChargingTime');
const batteryDischargingTime = document.querySelector('.batteryDischarging');

//Battery API
const battery = () => {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(battery => {
            function updateAllBatteryDetails() {
                updateChargingInfo();
                updateChargingTimeInfo();
                updateLevelChange();
                updateDischargingTimeInfo()
                
            }
            updateAllBatteryDetails();

            //battery charging change
            battery.addEventListener('chargingchange', () => {
                updateChargingInfo();
            });
            function updateChargingInfo() {
                const isCharging = battery.charging ? 'Yes' : 'No';
                batteryCharging.innerHTML = isCharging;
            }

            //battery charging time
            battery.addEventListener('chargingtimechange', () => {
                // console.log('charging time has changed');
                updateChargingTimeInfo();
            });
            function updateChargingTimeInfo(){
                // console.log(battery.chargingTime);
                batteryCharingTime.innerHTML = battery.chargingTime;
            }


            
    
            //battery Discahrge time
            battery.addEventListener('dischargingtimechange', () => {
                updateDischargingTimeInfo();
            });
            function updateDischargingTimeInfo() {
                // console.log(battery.discharingTime);
                batteryDischargingTime.innerHTML = battery.dischargingTime;
            }


            //battery level change
            battery.addEventListener('levelchange', () => {
                updateLevelChange();
            });

            function updateLevelChange() {
                const level = battery.level * 100 + '%';
                batteryLevel.innerHTML = level;

            }
            
        });
    }
}

battery();
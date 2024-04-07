// script.js
// Add a mouseclick to start (will make fullscreen)


const linesToScroll = [
    "systemd[1]: Starting Session 2334 of user root.",
    "systemd[1]: Started Session 2334 of user root.",
    "systemd[1]: CRON[6643]: (root) CMD ([ -x /opt/psa/admin/sbin/backupming 1 && /opt/psa/admin/sbin/backupmng>/dev/null 2>&1)",
    "systemd[1]: Starting Session 2336 of user root.",
    "systemd[1]: Started Session 2336 of user root.",
    "systemd[1]: Starting Session 2337 of user root.",
    "systemd[1]: Started Session 2337 of user root.",
    "systemd[1]: Started Session 2337 of user root.",
    "systemd[1]: plesk_saslauthd[6896]: 11sten-6, status-5, dbpath='/plesk/passwd.db', keypath='/plesk/passwd_db_key",
    "systemd[1]: unprivileged-1 plesk_saslauthd[6096]: privileges set to (109:115) (effective 109:115)",
    "systemd[1]: plesk_saslauthd[6096]: failed mail authenticatication attempt for user 'spencer (password len-8)",
    "systemd[1]: postfix/smtpd[6094): warning: mail.cdcenterpriseagency.com[192.168.0.1371: SASL LOGIN authentication failed: authentication failure",
    "systemd[1]: postfix/smtpd[6094): disconnect from mail.cdcenterpriseagency.com[192.168.0.137]",
    "systemd[1]: plesk_saslauthd[6896]: select timeout, exiting",
    "systemd[1]: Reloading.",
    "systemd[1]: [/lib/systemd/system/docker.service:25] Unknown Ivalue 'Delegate in section 'Service",
    "systemd[1]: Started ACPI event daemon.",
    "systemd[1]: Listening on ACPID Listen Socket.",
    "systemd[1]: Activated swap /dev/mapper/vg-lv_swap. systemd[1]: Found device /dev/mapper/vg-lv_swap.",
    "systemd[1]: Mounted /.",
    "systemd[1]: Found device /sys/devices/virtual/block/dm-1.",
    "systemd[1]: Found device /dev/dn-1.",
    "systemd[1]: Found device /dev/disk/by-id/dm-name-vg-lv_swap.",
    "systemd[1]: Found device /dev/disk/by-id/dm-uuid-LVM-yUXAG@mqWmCgCumj 90SEItMobZyUD2fIRY4EH1VM5bcDa7sgXGSe1WJPCLH5$P25.",
    "systemd[1]: Found device /dev/disk/by-uuid/b58531ea-be50-44fa-b561-60ed44d3cf60.",
    "systemd[1]: Found device /dev/vg/lv_swap.",
    "systemd[1]: Activated swap /dev/dm-1.",
    "systemd[1]: Activated swap /dev/disk/by-id/dm-name-vg-lv_swap.",
    "systemd[1]: Activated swap/dev/disk/by-id/dm-uuid-LVM-yUXAGemqWmCgCumj90SEItMobZyUD2fIRY4EH1VM5bc0a7sgXGSeiWJPCLH5SP25",
    "systemd[1]: Activated swap /dev/disk/by-uuid/b58531ea-be50-44fa-b561-60ed44d3cf60.",
    "systemd[1]: Activated swap /dev/vg/1v_swap.",
    "systemd[1]: Reloading.",
    "systemd[1]: [/lib/systemd/system/docker.service:25] Unknown Ivalue 'Delegate' in section 'Service'",
    "systemd[1]: Started ACPI event daemon.",
    "systemd[1]: Listening on ACPID Listen Socket.",
    "systemd[1]: Activated swap /dev/mapper/vg-lv_swap. systemd[1]: Found device /dev/mapper/vg-lv_swap.",
    "systemd[1]: Mounted /.",
    "systemd[1]: Found device /sys/devices/virtual/block/dm-1.",
    "systemd[1]: Found device /dev/dm-1.",
    "systemd[1]: Found device /dev/disk/by-id/dm-name-vg-lv_swap.",
    "systemd[1]: Found device /dev/disk/by-1d/dm-uuid-LVM-yUXAG@mqWmCgCumj90SEItMobZyUD2fIRY4EH1VH5bcDa7sgXGSe1WJPCLH5SP25.",
    "systemd[1]: Found device /dev/disk/by-uuid/b58531ea-be50-44fa-b561-60ed44d3cf68.",
    "systemd[1]: Found device /dev/vg/lv_swap.",
    "systemd[1]: Activated swap /dev/dm-1",
    "systemd[1]: Activated swap /dev/disk/by-id/dm-name-vg-lv_swap.",
    "systemd[1]: Activated swap /dev/disk/by-id/dm-uuid-LVM-yUXAG0mqWmCgCumj 90SEItMobZyUD2fIRY4EH1VM5bc0a7sgXGSeiWJPCLH5sP25 ",
    "systemd[1]: Activated swap /dev/disk/by-uuid/b58531ea-be58-44fa-b561-60ed44d3cf60.",
    "systemd[1]: Activated swap /dev/disk/by-1d/dm-dame-vg-lv_swap.",
    "systemd[1]: Activated swap /dev/disk/by-1d/dm-uuid-LVM-yUXAGBqlemCgCumj9oSEItMobZyWD2fIRY4EH1VMSbc0a7sgXGSetWJPCLHSSP25.",
    "systemd[1]: Activated swap /dev/disk/by-uuid/b58531ea-be58-44fa-b561-60ed44d3cf60.",
    "systemd[1]: Activated swap /dev/vg/v_swap.",
    "systemd[1]: Reloading.",
    "systemd[1]: [/lib/systemd/system/docker.service:25] Unknown Ivalue 'Delegate in section 'Service    ",
    "systemd[1]: Started ACPI event daemon.",
    "systemd[1]: Listening on ACPID Listen Socket.",
    "systemd[1]: Activated swap /dev/mapper/vg-tv_swap. systemd[1]: Found device /dev/mapper/vg-lv_swap.    ",
    "systemd[1]: Mounted /.    ",
    "systemd[1]: Found device /sys/devices/virtual/block/dn-1.    ",
    "systemd[1]: Found device /dev/dn-1.",
    "systemd[1]: Found device /dev/disk/by-1d/ds-name-vg-lv_swap.    ",
    "systemd[1]: Found device /dev/disk/by-1d/dm-uuid-LVM-yUXAGOqCgCumj 90SEItMobZy02fIRY4EH1VHSbc0a7sgXGSetWJPCLH5SP25.",
    "systemd[1]: Found device /dev/disk/by-uuid/b58531ea-be50-44fa-b561-60ed44d3cf60.",
    "systemd[1]: Found device /dev/vg/v_swap.    ",
    "systemd[1]: Activated swap /dev/om-1.    ",
    "systemd[1]: Activated swap /dev/disk/by-1d/dm-name-vg-lv_swap.    ",
    "systemd[1]: Activated swap /dev/disk/by-1d/dm-uuid-LVM-yUXAGgCgCumj9oSEItMobZyuD2fIRYAEHIVMSbcDa7sgXGS1WJPCLNSSP25",
    "systemd[1]: Activated swap /dev/disk/by-uuid/b58531ea-be50-44fa-b561-60ed44d3cf60.",
    "systemd[1]: Activated swap /dev/vg/v_swap.",
    "systemd[1]: Reloading.",
    "systemd[1]: [/lib/systemd/system/docker.service:25] Unknown Ivalue 'Delegate in section 'Service    ",
    "systemd[1]: Started ACPI event daemon.    ",
    "systemd[1]: Listening on ACPID Listen Socket.    ",
    "systemd[1]: Activated swap /dev/mapper/vg-lv_swap.",
    "systemd[1]: Found device /dev/mapper/vg-lv_swap.    ",
    "systemd[1]: Mounted /.    ",
    "systemd[1]: Found device /sys/devices/virtual/block/dm-1.    ",
    "systemd[1]: Found device /sys/devices/virtual/block/dm-1.",
    "systemd[1]: Found device /dev/dn-1.",
    "systemd[1]: Found device /dev/disk/by-id/dm-name-vg-lv_swap.",
    "systemd[1]: Found device /dev/disk/by-id/dm-uuid-LVM-yUXAG@mqWmCgCumj90SEItMobZyUD2fIRY4EH1VM5bcDa7sgXGSe1WJPCLH5$P25.",
    "systemd[1]: Found device /dev/disk/by-uuid/b58531ea-be50-44fa-b561-60ed44d3cf60.",
    "systemd[1]: Found device /dev/vg/lv_swap.",
    "systemd[1]: Activated swap /dev/dm-1.",
    "systemd[1]: Activated swap /dev/disk/by-id/dm-name-vg-lv_swap.",
    "systemd[1]: Activated swap /dev/disk/by-id/dm-uuid-LVM-yUXAGOmgCgCumj90SEItMobZyUD2fIRYAENIVMSbc0a7sgXGSetWJPCLNSSP25",
    "systemd[1]: Activated swap /dev/disk/by-uuid/b58531ea-be50-44fa-b561-60ed44d3cf60.",
    "systemd[1]: Activated swap /dev/vg/lv_swap.",
    "systemd[1]: Starting Synchronize Hardware Clock to System Clock...",
    "systemd[1]: Stopping Session 2336 of user root.",
    "systemd[1]: Stopping Session 2334 of user root.",
    "systemd[1]: Stopping Session 1107 of user root.",
    "systemd[1]: Stopping Session 21 of user root.",
    "systemd[1]: Found device /dev/mapper/vg-lv_swap.",
    "systemd[1]: Mounted /.",
    "systemd[1]: Found device /sys/devices/virtual/block/dn-1.",
    "systemd[1]: Found device /dev/de-1.",
    "systemd[1]: Found device /dev/disk/by-id/dm-name-vg-lv_swap.",
    "systemd[1]: Found device /dev/disk/by-uuid/b58531ea-be50-44fa-b561-60ed44d3cf60.",
    "systemd[1]: Found device /dev/vg/v_swap.",
    "systemd[1]: Activated swap /dev/dm-1.",
    "systemd[1]: Activated swap /dev/disk/by-id/de-name-vg-lv_swap.",
    "systemd[1]: Activated swap /dev/disk/by-uuid/b58531ea-be50-44fa-b561-60ed44d3cf60.",
    "systemd[1]: Activated swap /dev/vg/v_swap.",
    "systemd[1]: Starting Synchronize Hardware Clock to System Clock...",
    "systemd[1]: Stopping Session 2336 of user root.",
    "systemd[1]: Stopping Session 2334 of user root.",
    "systemd[1]: Stopping Session 21 of user root.",
    "systemd[1]: Stopping LVM2 PV scan on device 8:3...",
    "systemd[1]: Stopping system-systemd\x2dfsck.slice.",
    "systemd[1]: Removed slice system-systemd\x2dfsck.slice.",
    "systemd[1]: Stopping User Manager for UID 0...",
    "systemd[28726]: Stopping Default.",
    "systemd[28726]: Stopped target Default.",
    "systemd[28726]: Stopping Basic System.",
    "systemd[28726]: Stopped target Basic System.",
    "systemd[28726]: Stopping Paths.",
    "systemd[28726]: Stopped target Paths.",
    "systemd[28726]: Stopping Timers.",
    "systemd[28726]: Stopped target Timers.",
    "systemd[28726]: Stopping Sockets.",
    "systemd[28726]: Stopped target Sockets.",
    "systemd[28726]: Starting Shutdown.",
    "systemd[28726]: Reached target Shutdown.",
    "systemd[28726]: Starting Exit the Session...",
    "systemd[1]: Stopping Graphical Interface.",
    "systemd[1]: Stopped target Graphical Interface.",
    "systemd[1]: Stopping Multi-User System.",
    "systemd[1]: Stopped target Multi-User System.",
    "systemd[1]: Stopping OpenBSD Secure Shell server...",
    "systemd[1]: Stopping Docker Application Container Engine...",
    "systemd[1]: Stopping Startup script for Plesk control panel server...",
    "systemd[1]: Stopping Startup script for Panel sw-engine...",
    "systemd[1]: Stopping Plesk mail filter service for Postfix...",
    "systemd[1]: Stopping The PHP FastCGI Process Manager...",
    "systemd[1]: Stopping Startup script for nginx service...",
    "systemd[28726]: Received SIGRTMIN+24 from PID 6461 (K11).",
    "systemd[1]: Stopping Plesk Panel...",
    "systemd[1]: Stopped Plesk Panel.",
    "systemd[1]: Stopping Regular background program processing daemon...",
    "systemd[1]: Stopping LSB: Apache2 web server...",
    "dockerd[11639]: 'time=2017-09-26T23:31:47.560001701+02:00' level=info msg=Processing signal terminated"

  ];
  
  const scrollingTextElement = document.getElementById('scrolling-text');
  let lineIndex = 0;
  let charIndex = 0;
  
  function showNextLetters() {
    if (lineIndex < linesToScroll.length) {
      const currentLine = linesToScroll[lineIndex];
      const lettersToShow = 8;
  
      if (charIndex < currentLine.length) {
        scrollingTextElement.innerHTML += currentLine.substring(charIndex, charIndex + lettersToShow);
        charIndex += lettersToShow;
      } else {
        // Move to the next line
        lineIndex++;
        charIndex = 0;
  
        // Add a line break between lines
        scrollingTextElement.innerHTML += "<br>";
      }
    } else {
      // Stop the scrolling when all lines are displayed
      clearInterval(scrollInterval);
    }
  
    // Scroll the text container upwards
    scrollingTextElement.scrollTop = scrollingTextElement.scrollHeight;
  }
  
  const scrollInterval = setInterval(showNextLetters, 1);

  setTimeout(function(){
    var audio1 = document.getElementById('skullIN');
    audio1.play();
  }, 6000)
  setTimeout(function(){
    var audio1 = document.getElementById('skullLaugh');
    audio1.play();
  }, 7250)
  setTimeout(function(){
    var audio1 = document.getElementById('skullOUT');
    audio1.play();
  }, 10000)
  setTimeout(function(){
    var audio1 = document.getElementById('skullOUT1');
    audio1.play();
  }, 11000)

  // Request fullscreen for the entire document on page load

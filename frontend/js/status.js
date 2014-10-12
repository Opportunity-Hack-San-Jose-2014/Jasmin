/**
 * Created by lmarkus on 10/12/14.
 */
var status = status || {};

status.NEW_UNVERIFIED = 0;
status.VERIFIED_NOT_ASSIGNED = 1;
status.VERIFIED_ASSIGNED = 2;
status.VERIFIED_PICKED_UP= 3;
status.REJECTED= 4;


status.setDonationStatus = function setDonationStatus(id,status){
    $.post("/donationStatusUpdate.php",{donationID:id,donationStatus:status},function(data){
        if (data === 1) {console.log("Success!")};
        console.log(data);
    })
}
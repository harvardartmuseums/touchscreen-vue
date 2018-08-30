$COMPUTER = "localhost"
$NAMESPACE = "root\standardcimv2\embedded"

# This well-known security identifier (SID) corresponds to the BUILTIN\Administrators group.

$Admins_SID = "S-1-5-32-544"

# Create a function to retrieve the SID for a user account on a machine.

function Get-UsernameSID($AccountName) {

    $NTUserObject = New-Object System.Security.Principal.NTAccount($AccountName)
    $NTUserSID = $NTUserObject.Translate([System.Security.Principal.SecurityIdentifier])

    return $NTUserSID.Value

}

# Get the SID for a user account named "Diet-kiosk".

$Diet_SID = Get-UsernameSID("diet-kiosk")

"`nCurrent settings for custom shells:"

Get-WmiObject -namespace $NAMESPACE -computer $COMPUTER -class WESL_UserSetting | Select Sid, Shell, DefaultAction

# Enable Shell Launcher


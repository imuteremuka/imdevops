# Managing Permissions

## Read Write Execute

- each file or folder in Linix has an owner

### UGO - User Group Others

- permissions to a file or folder as assigned from user then group and then others
- ls -l is used to show who has permissions to a file or folder
- the first dash show whether it is a file or folder
  -- <---> user persimissions <---> group permissions <---> others permissions

### Changing Permissions

- chown <user>:[<group>] <filename>
- chgrp <filename> is used to change group

                    File            Directory

- Read 4 Read ls
- Write 2 Modify create/delete
- Execute 1 Run cd

- chmod is used to manage permission
  -- chmod 777 <filename> gives readwriteexcute to user,group,others
  -- chmod +x <filename> makes a file executable
- umask
  -- us used to subtract the default permission to a file or folder
  -- it is contained in the .profile folder when creating a user /etc/profile

-- Special Permissions
**_* SUID*_**

- chmod 4777 <filename>
- chmod u+s <filename>

**_ SGID _**

- chmod 2770 <filename>
- chmod g+s <filename>

**_ Sticky Bit _**

- used to remove delete permission to others

**_ ACL _**

- used to give permissions to other because Linux give permission to only one user or group

- getacl - used to get current ACL
- setacl - set an ACL

-

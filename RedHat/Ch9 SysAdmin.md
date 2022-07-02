## Managing OS

**_ Jobs and Processes _**
-- All tasks are started as process and have a PID
-- Jobs are started from the shell command and can be started in the foreground or backgraound

**_ Background Jobs _**

-- <command> <&> makes the job to be run in the background

--- A running job can be stop and <bg> command can be used to move the job to the background

-- **_ job _** is command used to list all the jobs

--- <job> <number> is used to run a particular job
--- <fg> command is used to bring the job to the foreground

**_ ps <options> _**
-- it used by the administrator to list jobs
-- **_ ps aux _** shows all processes running

**_ memory usage _**
--- linux places many files in memory and it needs to be managed
--- free -m ---

**_ cpu load _**

-- **_ uptime _** it shows you process uptime and load

-- **_ top _** to check biggest users of swap space
--- you can then kill the process by selecting the PID and sending kill signal 9

---**_ kill all _** can also be used to kill all processes

**_ nice and renice _**

-- it used to give priority to processess

**_ tuned _**
-- it is used for process optimisation
--- tuned-adm list - will show a list of all profiles
--- tuned-adm profile <name> - will set a profile
--- tuned-adm active - will show the current profile

**_ Repositories _**

--- Create repositories for RPM (redhat package manager)

# Setup

## WirtBot®

If you want to run your own WirtBot you will need the following things:

- A machine with a public IP on the internet
- Root access on this machine
- A Domain that points to your machine

### Automated (you are highly encouraged to use this!)
> This assumes you have a fresh Debian10 server or VPS with root access!

First thing to do is to make sure that you have an SSH key. 
If you do not have one yet you can follow [this tutorial](https://www.ssh.com/ssh/keygen/).
You will need the content of the `.pub` file that will be created for the next step.

Now clone or download the [Wirt repository](https://github.com/b-m-f/wirt).

Time to install:
- [ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)
- [sshpass](https://gist.github.com/arunoda/7790979) (necessary to login via SSH to your servers root user via password for the setup)
- [node](https://nodejs.org/en/download/)

When you are done run `node installer/installer.js` in the root of the repository.

The installer will now take you through the rest of the setup.
After answering all the questions wait until the setup is done, this can take up to **20 minutes** so just be patient.

Thats it. 

Your WirtBot will have a valid certificate from LetsEncrypt and will be ready to securely manage your network, complete with all functionality that the Wirt system has to offer.

#### Updating

Simply run the installer again as described above and choose the update option.

### Manual (You need to know what you are doing for this!)

Please consult the [developer documentation](https://github.com/b-m-f/Wirt/tree/master/developer-docs/WirtBot/Manual_setup.md) for this.

## WirtUI

Nothing to set up here.

By reaching the website your setup is done. If you have set up the WirtBot following the above instructions it should already be connected to the WirtUI and you are ready to go.
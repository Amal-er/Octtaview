import bcrypt from 'bcryptjs';
const users = [
    {
        sponser: null,
        userStatus: 'pending',
        username: 'Super Admin',
        email: 'seclobclt@gmail.com',
        address: 'seclob-cyber',
        password: bcrypt.hashSync('123456', 10),
        isSuperAdmin: true,
        transactionPassword: bcrypt.hashSync('123456', 10),
        previousPackage: 'Bronza',
        phone: 9852416378,
        ownSponserId: 'OCV461054',
    },
];
export default users;
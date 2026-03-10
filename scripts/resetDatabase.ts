
import { PrismaClient } from '../packages/db/src/generated/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🚀 Starting system data reset...');

    try {
        // Order matters for relational databases, though MongoDB is more flexible
        // we should still delete dependent records first.

        console.log('🗑️ Deleting Repayments...');
        const repayments = await prisma.repayment.deleteMany();
        console.log(`✅ Deleted ${repayments.count} repayments.`);

        console.log('🗑️ Deleting Loans...');
        const loans = await prisma.loan.deleteMany();
        console.log(`✅ Deleted ${loans.count} loans.`);

        console.log('🗑️ Deleting Customers...');
        const customers = await prisma.customer.deleteMany();
        console.log(`✅ Deleted ${customers.count} customers.`);

        console.log('\n✨ System data reset complete! (Admins kept intact)');
    } catch (error) {
        console.error('❌ Reset failed:', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();

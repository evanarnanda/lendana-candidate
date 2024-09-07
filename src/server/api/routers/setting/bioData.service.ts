import type { ProtectedTRPCContext } from "../../trpc";

export const getBioData = async (ctx: ProtectedTRPCContext) => {

  // Uncomment this to simulate a slow query
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  
  return ctx.db.query.bioDatas.findFirst({
    where: (table, { eq }) => eq(table.userId, ctx.user.id),
    columns: {
      id: true,
      userId: true,
      nik: true,
      fullname: true,
      genderId: true,
      bloodtypeId: true,
      maritalId: true,
      placeofbirthId: true,
      dateofbirth: true,
      religionId: true,
      nationalityId: true,
    },
    with: {
      user: { columns: { fullName: true,} },
      gender: { columns: { name: true,} },
      bloodtype: { columns: { name: true,} },
      maritalStatus: { columns: { name: true,} },
      placeOfBirth: { columns: { name: true,} },
      religion: { columns: { name: true,} },
      nationality: { columns: { name: true,} },
    }

  })
}
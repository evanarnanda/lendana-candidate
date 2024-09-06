import { createTRPCRouter, protectedProcedure } from "../../trpc";
import * as bioInputs from "./bioData.input";
import * as bioServices from "./bioData.service";

export const settingRouter = createTRPCRouter({

  myBioData: protectedProcedure
    .query(({ ctx }) => bioServices.getBioData(ctx)),

});

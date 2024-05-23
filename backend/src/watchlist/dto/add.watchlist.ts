import Joi from "joi";

export interface AddWatchlistDto {
  stockId: number;
}

export const AddWatchListDtoSchema = Joi.object({
  stockId: Joi.number().required(),
});

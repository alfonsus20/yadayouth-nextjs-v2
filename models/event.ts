import api from "../api";
import { APIResponsePaginated } from "../types/apiResponse";
import { Event } from "../types/entities/event";

export const fetchPastEvents = (): APIResponsePaginated<Event> => {
  return api.get("/past-event");
};

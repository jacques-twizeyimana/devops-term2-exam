import testimonialsStore from "../../src/store/testimonialStore";
import {
  getAllTestimonials,
  updateTestimonial,
  addTestimonial,
  deleteTestimonial,
  likeTestimonial,
  dislikeTestimonial,
} from "../../src/actions/testimonialActions";
import { range } from "lodash";
describe("Token store", () => {
  it("Initial State test", () => {
    // Response body sample
    const initialState = [
      {
        id: 1,
        status: "USED",
        OwnerId: 1,
        createdAt: new Date(),
        code: 67819918,
      },
      {
        id: 2,
        status: "UNUSED",
        OwnerId: 1,
        createdAt: new Date(),
        code: 67819918,
      },
    ];

    expect(testimonialsStore.getState()).toEqual(initialState);
  });

  it("add tokens test", async () => {
    const newTestimony = {
      id: 3,
      status: "Divine elsa",
      OwnerId: 1,
      createdAt: new Date(),
      testimonialTitle: "23 Years On Bed",
      testimonialBody:
        "Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members for the high level of care we provide throughout our facility.",
      code: 67819918,
    };

    const initialLength = testimonialsStore.getState().length; // number of tokens before addition

    await testimonialsStore.dispatch(addTestimonial(newTestimony));

    expect(testimonialsStore.getState().length).toBeGreaterThan(initialLength);

    expect(testimonialsStore.getState()[2].status).toEqual(newTestimony.status);
  });

  it("like tokens", async () => {
    const testimonialToLike = testimonialsStore.getState()[0];

    await testimonialsStore.dispatch(likeTestimonial(testimonialToLike));

    expect(testimonialsStore.getState()[0].likes).toBeGreaterThan(
      testimonialToLike.likes
    );
  });

  it("Update Token test", async () => {
    // Response body sample
    const stateToUpdate = {
      id: 2,
      status: "UNUSED",
      OwnerId: 1,
      code: 67819918,
    };

    await testimonialsStore.dispatch(updateTestimonial(stateToUpdate));
    expect(testimonialsStore.getState()[1].status).toEqual(
      stateToUpdate.status
    );
  });

  it("Update Unexisting Token test", async () => {
    // Response body sample
    const stateToUpdate = {
      id: 4,
      status: "UNUSED",
      OwnerId: 1,
      code: 67819918,
    };

    await testimonialsStore.dispatch(updateTestimonial(stateToUpdate));
    expect(testimonialsStore.getState()[1]).not.toEqual(stateToUpdate);
  });

  it("View Token test", async () => {
    // Response body sample

    const initialState = testimonialsStore.getState();
    let views = initialState[0].views;
    await testimonialsStore.dispatch(getAllTestimonials());
    expect(testimonialsStore.getState()[0].views).toEqual(views + 1);
    ++views;

    for (const i in range(40))
      await testimonialsStore.dispatch(getAllTestimonials());

    expect(testimonialsStore.getState()[0].views).toEqual(views + 40);
  });

  it("Use invalid token test", async () => {
    // Response body sample

    const tokenToReact = {
      id: 2,
      OwnerId: 1,
    };

    expect(testimonialsStore.getState()[1].dislikes).toEqual(likes - dislikes);
  });
  it("delete tokens", async () => {
    const initialLength = testimonialsStore.getState().length;

    await testimonialsStore.dispatch(
      deleteTestimonial(testimonialsStore.getState()[1])
    );

    expect(testimonialsStore.getState().length).toBeLessThan(initialLength);
  });
});

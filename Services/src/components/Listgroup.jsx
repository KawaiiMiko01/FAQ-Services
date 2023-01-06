import React from "react";

export default function Listgroup() {
  return (
    <div>
      <p
        style={{
          paddingTop: "150px",
          paddingLeft: "400px",
        }}
      >
        <a
          style={{ margin: "25px" }}
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Toggle first element
        </a>
        <button
          style={{ margin: "25px" }}
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#multiCollapseExample2"
          aria-expanded="false"
          aria-controls="multiCollapseExample2"
        >
          Toggle second element
        </button>
        <button
          style={{ margin: "25px" }}
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".multi-collapse"
          aria-expanded="false"
          aria-controls="multiCollapseExample1 multiCollapseExample2"
        >
          Toggle both elements
        </button>
      </p>
      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <div className="card card-body">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              blanditiis ipsam laboriosam repellendus ut sed dolores, impedit
              exercitationem eos minus, accusamus dolor quisquam beatae corrupti
              delectus perferendis quasi excepturi enim? Nemo optio, dignissimos
              ex odio ut est ipsa totam doloremque placeat perferendis porro
              sint, reprehenderit quo aspernatur reiciendis esse unde eius quasi
              commodi ullam fugit! Aut delectus expedita nesciunt dicta.
              Voluptatem sequi minus temporibus magnam totam error. Maxime
              molestiae ipsa itaque voluptas praesentium repudiandae fugiat
              maiores, quam aspernatur possimus aut nobis fuga minus sequi,
              veniam molestias rem. Illum, incidunt! Vitae. Magni voluptate quam
              sit incidunt quibusdam? Architecto perferendis repudiandae in
              dolorem eum illum, deleniti incidunt recusandae, rerum
              consequuntur libero suscipit, quos accusantium at voluptate iste
              beatae necessitatibus? Pariatur, beatae iste! Quod nisi quia eius,
              corrupti omnis ullam sit ducimus sequi odit temporibus eligendi
              aspernatur labore fugiat, quos cumque soluta sunt voluptatem nobis
              alias recusandae quas. Ea architecto delectus et doloremque.
              Adipisci fugit harum quo alias quis modi obcaecati rem dignissimos
              suscipit ex? Maxime tempore ea a? Qui dolore explicabo sapiente
              quibusdam quod similique illo eveniet, autem tempora doloremque!
              Quo, exercitationem? Id molestias, nemo sed consequatur
              consectetur quae doloribus repellat iste recusandae quo, hic harum
              accusamus quod fugit officiis quidem earum cupiditate
              reprehenderit asperiores odio reiciendis vel. Exercitationem
              impedit obcaecati a! Dolorem aliquid totam ducimus veniam
              quisquam, neque assumenda blanditiis, animi quos, voluptatem est.
              Voluptates inventore at soluta nesciunt. Facilis ipsum dolorum
              illo est quae et nulla reiciendis magnam non beatae! Corrupti,
              reprehenderit. Quo eum nostrum repellat excepturi nesciunt
              pariatur quod ullam. Soluta a odio hic architecto rem consectetur
              omnis beatae, eaque quaerat, quia fuga alias unde dolorem deleniti
              corporis sunt. Non nobis vero veniam dignissimos ipsa quaerat,
              temporibus rerum perferendis. Mollitia obcaecati sunt, deleniti
              quam reiciendis atque temporibus quos exercitationem sapiente,
              provident labore esse est aliquid! Culpa earum dolorum est!
            </div>
          </div>
        </div>
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample2">
            <div className="card card-body">
              corrupti omnis ullam sit ducimus sequi odit temporibus eligendi
              aspernatur labore fugiat, quos cumque soluta sunt voluptatem nobis
              alias recusandae quas. Ea architecto delectus et doloremque.
              Adipisci fugit harum quo alias quis modi obcaecati rem dignissimos
              suscipit ex? Maxime tempore ea a? Qui dolore explicabo sapiente
              quibusdam quod similique illo eveniet, autem tempora doloremque!
              Quo, exercitationem? Id molestias, nemo sed consequatur
              consectetur quae doloribus repellat iste recusandae quo, hic harum
              accusamus quod fugit officiis quidem earum cupiditate
              reprehenderit asperiores odio reiciendis vel. Exercitationem
              impedit obcaecati a! Dolorem aliquid totam ducimus veniam
              quisquam, neque assumenda blanditiis, animi quos, voluptatem est.
              Voluptates inventore at soluta nesciunt. Facilis ipsum dolorum
              illo est quae et nulla reiciendis magnam non beatae! Corrupti,
              reprehenderit. Quo eum nostrum repellat excepturi nesciunt
              pariatur quod ullam. Soluta a odio hic architecto rem consectetur
              omnis beatae, eaque quaerat, quia fuga alias unde dolorem deleniti
              corporis sunt. Non nobis vero veniam dignissimos ipsa quaerat,
              temporibus rerum perferendis. Mollitia obcaecati sunt, deleniti
              quam reiciendis atque temporibus quos exercitationem sapiente,
              provident labore esse est aliquid! Culpa earum dolorum est!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

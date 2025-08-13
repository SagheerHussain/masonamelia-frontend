import React, { useState } from "react";

const commentsData = [
  {
    id: 1,
    name: "Noah Pierre",
    time: "58 minutes ago",
    content:
      "I’m a bit unclear about how condensation forms in the water cycle. Can someone break it down?",
    replies: [
      {
        id: 11,
        name: "Skill Sprout",
        time: "8 minutes ago",
        content:
          "Condensation happens when water vapor cools down and changes back into liquid droplets. It’s the step before precipitation.",
      },
    ],
  },
  {
    id: 2,
    name: "Mollie Hall",
    time: "5 hours ago",
    content:
      "I really enjoyed today’s lesson on the water cycle! The animations made the processes so much easier to grasp.",
    replies: [],
  },
];

const Comments = () => {
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  const handleReplySubmit = (parentId) => {
    console.log(`Reply to comment ID ${parentId}:`, replyText);
    setReplyText("");
    setReplyingTo(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Comments</h2>

      {commentsData.map((comment) => (
        <div key={comment.id} className="mb-6">
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full bg-gray-300 shrink-0">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-full">
              <h3 className="font-semibold">
                {comment.name}{" "}
                <span className="text-sm text-gray-500 font-normal">
                  {comment.time}
                </span>
              </h3>
              <p className="mt-1 text-sm text-gray-800">{comment.content}</p>
              <button
                onClick={() =>
                  setReplyingTo(replyingTo === comment.id ? null : comment.id)
                }
                className="text-sm text-blue-600 mt-2"
              >
                Reply
              </button>

              {/* Show reply form if replying */}
              {replyingTo === comment.id && (
                <div className="mt-2">
                  <textarea
                    className="w-full p-2 text-sm border rounded-md"
                    rows={2}
                    placeholder="Write a reply..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                  />
                  <button
                    onClick={() => handleReplySubmit(comment.id)}
                    className="mt-1 text-sm bg-[#111218] text-white px-4 py-1 rounded-[30px] hover:bg-[#111218]/80"
                  >
                    Submit
                  </button>
                </div>
              )}

              {/* Replies */}
              {comment.replies.length > 0 && (
                <div className="mt-4 pl-8 border-l border-gray-200 space-y-4">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-300 shrink-0">
                        <img
                          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                          alt=""
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          {reply.name}{" "}
                          <span className="text-sm text-gray-500 font-normal">
                            {reply.time}
                          </span>
                        </h4>
                        <p className="text-sm text-gray-800">{reply.content}</p>
                        <button
                          onClick={() =>
                            setReplyingTo(
                              replyingTo === reply.id ? null : reply.id
                            )
                          }
                          className="text-sm text-blue-600 mt-1"
                        >
                          Reply
                        </button>

                        {/* Show reply box to reply of reply */}
                        {replyingTo === reply.id && (
                          <div className="mt-2">
                            <textarea
                              className="w-full p-2 text-sm border rounded-md"
                              rows={2}
                              placeholder="Write a reply..."
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                            />
                            <button
                              onClick={() => handleReplySubmit(reply.id)}
                              className="mt-1 text-sm bg-[#111218] text-white px-4 py-1 rounded-[30px] hover:bg-[#111218]/80"
                            >
                              Submit
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;

$(".proposalStatus").change(function(){
    var proposal_id = $(this).data('proposal_id');
    console.log(proposal_id);
    var status_id = $(this).val();
    $.ajax({
      url: '/api/proposal/' + proposal_id + '/status',
      type: 'POST',
      data: {statusid: status_id },
      success: function(result) {
        console.log("User status changed.");
      }
    });
});

function ConfirmDelete(){
		return confirm('Are you sure?');
	};
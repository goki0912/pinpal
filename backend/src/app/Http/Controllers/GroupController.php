<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\Member;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    public function getGroups()
    {
        $groups = Group::all();
        return $groups;
    }

    public function getGroup($group_id)
    {
        $group = Group::find($group_id);
        return $group;
    }
    
    public function createGroup(Request $request)
    {
        $group = new Group;
        $group->name = $request->name;
        $group->color = $request->color;
        $group->save();
    
        foreach ($request->email as $email) {
            $member = new Member;
            $member->email = $email;
            $member->group_id = $group->id;
            $member->save();
        }
        if ($group && $member) {
            return response()->json([
                'message' => 'Group created successfully'
            ], 201);
        } else {
            return response()->json([
                'message' => 'Group not created'
            ], 500);
        }
    }

    public function updateGroup(Request $request, $group_id)
    {
        $group = Group::find($group_id);
        $group->name = $request->name;
        $group->color = $request->color;
        $group->save();
        return response()->json([
            'message' => 'Group updated successfully'
        ], 200);
    }

    public function deleteGroup($group_id)
    {
        $group = Group::find($group_id);
        $group->delete();
        return response()->json([
            'message' => 'Group deleted successfully'
        ], 200);
    }

}
